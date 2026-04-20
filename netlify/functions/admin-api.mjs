import crypto from 'node:crypto';

const json = (statusCode, body, headers = {}) =>
  new Response(JSON.stringify(body), {
    status: statusCode,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-store',
      ...headers
    }
  });

function requireEnv(name) {
  const value = process.env[name];
  if (!value) throw new Error(`Missing environment variable: ${name}`);
  return value;
}

function parseCookies(request) {
  const raw = request.headers.get('cookie') || '';
  return Object.fromEntries(raw.split(';').map(part => part.trim()).filter(Boolean).map(part => {
    const idx = part.indexOf('=');
    return [decodeURIComponent(part.slice(0, idx)), decodeURIComponent(part.slice(idx + 1))];
  }));
}

function getSessionToken() {
  const email = requireEnv('ADMIN_EMAIL');
  const password = requireEnv('ADMIN_PASSWORD');
  const secret = requireEnv('ADMIN_SESSION_SECRET');
  return crypto.createHash('sha256').update(`${email}|${password}|${secret}`).digest('hex');
}

function isAuthenticated(request) {
  const cookies = parseCookies(request);
  return cookies.armbx_admin === getSessionToken();
}

function authHeaders() {
  const key = requireEnv('SUPABASE_SERVICE_ROLE_KEY');
  return {
    apikey: key,
    Authorization: `Bearer ${key}`,
    'Content-Type': 'application/json'
  };
}

async function supa(path, options = {}) {
  const base = requireEnv('SUPABASE_URL');
  const response = await fetch(`${base}/rest/v1/${path}`, {
    ...options,
    headers: {
      ...authHeaders(),
      ...(options.headers || {})
    }
  });
  const data = await response.json().catch(() => null);
  if (!response.ok) {
    throw new Error(data?.message || data?.error || `Supabase request failed: ${response.status}`);
  }
  return data;
}

function normalizeOrder(row) {
  return {
    ...row,
    status: row.order_status || row.status || 'new'
  };
}

export default async (request) => {
  try {
    const url = new URL(request.url);
    const action = url.searchParams.get('action') || 'session';

    if (action === 'session' && request.method === 'GET') {
      return json(200, { success: true, loggedIn: isAuthenticated(request) });
    }

    if (action === 'login' && request.method === 'POST') {
      const body = await request.json().catch(() => ({}));
      const ok = body.email === requireEnv('ADMIN_EMAIL') && body.password === requireEnv('ADMIN_PASSWORD');
      if (!ok) return json(401, { success: false, error: 'Login fehlgeschlagen' });
      const token = getSessionToken();
      return json(200, { success: true, loggedIn: true }, {
        'Set-Cookie': `armbx_admin=${token}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=${60 * 60 * 12}`
      });
    }

    if (action === 'logout' && request.method === 'POST') {
      return json(200, { success: true }, {
        'Set-Cookie': 'armbx_admin=; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=0'
      });
    }

    if (!isAuthenticated(request)) {
      return json(401, { success: false, error: 'Nicht eingeloggt' });
    }

    if (action === 'orders' && request.method === 'GET') {
      const rows = await supa('orders?select=id,order_number,created_at,customer_email,shipping_method,total,total_chf,order_status,status,item_count&order=created_at.desc&limit=100');
      return json(200, { success: true, orders: Array.isArray(rows) ? rows.map(normalizeOrder) : [] });
    }

    if (action === 'order' && request.method === 'GET') {
      const id = url.searchParams.get('id');
      if (!id) return json(400, { success: false, error: 'Missing id' });
      const rows = await supa(`orders?select=*&id=eq.${encodeURIComponent(id)}&limit=1`);
      const order = Array.isArray(rows) ? rows[0] : null;
      if (!order) return json(404, { success: false, error: 'Bestellung nicht gefunden' });
      const items = await supa(`order_items?select=*&order_id=eq.${encodeURIComponent(id)}&order=created_at.asc`);
      return json(200, { success: true, order: { ...normalizeOrder(order), items: Array.isArray(items) ? items : [] } });
    }

    if (action === 'status' && request.method === 'POST') {
      const body = await request.json().catch(() => ({}));
      const id = body.id;
      const status = body.status;
      if (!id || !['new', 'in_progress', 'done'].includes(status)) {
        return json(400, { success: false, error: 'Ungültige Statusdaten' });
      }
      const rows = await supa(`orders?id=eq.${encodeURIComponent(id)}`, {
        method: 'PATCH',
        headers: { Prefer: 'return=representation' },
        body: JSON.stringify({ order_status: status, status })
      });
      const order = Array.isArray(rows) ? rows[0] : null;
      return json(200, { success: true, order: normalizeOrder(order || {}) });
    }

    return json(405, { success: false, error: 'Methode/Aktion nicht erlaubt' });
  } catch (error) {
    console.error('admin-api failed', error);
    return json(500, { success: false, error: error.message || 'Unexpected error' });
  }
};
