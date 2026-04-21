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
  return Object.fromEntries(
    raw
      .split(';')
      .map((part) => part.trim())
      .filter(Boolean)
      .map((part) => {
        const idx = part.indexOf('=');
        return [decodeURIComponent(part.slice(0, idx)), decodeURIComponent(part.slice(idx + 1))];
      })
  );
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
    status: row?.order_status || row?.status || 'new'
  };
}

function normalizeProductRow(row) {
  return {
    id: row?.id || null,
    slot: Number(row?.slot || 0),
    name_de: String(row?.name_de || row?.name || ''),
    name_fr: String(row?.name_fr || row?.name_de || row?.name || ''),
    description_de: String(row?.description_de || ''),
    description_fr: String(row?.description_fr || ''),
    price_chf: Number(row?.price_chf ?? row?.price ?? 0),
    is_active: Boolean(row?.is_active ?? row?.active ?? false),
    image_url: row?.image_url || '',
    sort_order: Number(row?.sort_order ?? 0)
  };
}

function normalizeIncomingProducts(body) {
  const source = Array.isArray(body?.products)
    ? body.products
    : Array.isArray(body?.slots)
      ? body.slots
      : Array.isArray(body)
        ? body
        : [];

  return source
    .map((item, index) => {
      const slot = Number(item?.slot ?? item?.slot_number ?? index + 1);
      if (!Number.isInteger(slot) || slot <= 0) return null;
      const nameDe = String(item?.name_de ?? item?.name ?? item?.product_name ?? '').trim();
      const nameFr = String(item?.name_fr ?? item?.name_de ?? item?.name ?? item?.product_name ?? '').trim();
      return {
        slot,
        name_de: nameDe,
        name_fr: nameFr || nameDe,
        description_de: String(item?.description_de ?? '').trim(),
        description_fr: String(item?.description_fr ?? '').trim(),
        price_chf: Number(item?.price_chf ?? item?.price ?? 0),
        is_active: Boolean(item?.is_active ?? item?.active),
        image_url: String(item?.image_url ?? '').trim(),
        sort_order: Number(item?.sort_order ?? 0)
      };
    })
    .filter(Boolean);
}

async function listProducts() {
  const rows = await supa('products?select=*&order=slot.asc');
  return (Array.isArray(rows) ? rows : []).map(normalizeProductRow).sort((a, b) => a.slot - b.slot);
}

async function saveProducts(body) {
  const items = normalizeIncomingProducts(body);
  if (!items.length) {
    throw new Error('Keine Produktdaten erhalten');
  }

  const payload = items.map((item) => {
    const price = Number.isFinite(item.price_chf) ? item.price_chf : 0;
    const nameDe = item.name_de || '';
    const nameFr = item.name_fr || nameDe;
    const active = item.is_active === true;
    return {
      slot: item.slot,
      name: nameDe,
      name_de: nameDe,
      name_fr: nameFr,
      description_de: item.description_de || null,
      description_fr: item.description_fr || null,
      price: price,
      price_chf: price,
      active,
      is_active: active,
      image_url: item.image_url || null,
      sort_order: Number.isFinite(item.sort_order) ? item.sort_order : 0,
      updated_at: new Date().toISOString()
    };
  });

  await supa('products?on_conflict=slot', {
    method: 'POST',
    headers: {
      Prefer: 'resolution=merge-duplicates,return=representation'
    },
    body: JSON.stringify(payload)
  });

  return listProducts();
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
      return json(
        200,
        { success: true, loggedIn: true },
        {
          'Set-Cookie': `armbx_admin=${token}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=${60 * 60 * 12}`
        }
      );
    }

    if (action === 'logout' && request.method === 'POST') {
      return json(
        200,
        { success: true },
        {
          'Set-Cookie': 'armbx_admin=; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=0'
        }
      );
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

    if (action === 'products' && request.method === 'GET') {
      const products = await listProducts();
      return json(200, { success: true, products });
    }

    if (action === 'products' && request.method === 'POST') {
      const body = await request.json().catch(() => ({}));
      const products = await saveProducts(body);
      return json(200, { success: true, products });
    }

    return json(405, { success: false, error: 'Methode/Aktion nicht erlaubt' });
  } catch (error) {
    console.error('admin-api failed', error);
    return json(500, { success: false, error: error.message || 'Unexpected error' });
  }
};
