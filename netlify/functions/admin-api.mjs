import crypto from 'node:crypto';

const META_PREFIX = '__ARMBX_META__';

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

function coerceNameValue(value, fallback = '') {
  if (value && typeof value === 'object') {
    return String(value.de || value.fr || fallback || '');
  }
  return String(value || fallback || '');
}

function coercePrice(row) {
  const priceChf = Number(row?.price_chf);
  const price = Number(row?.price);
  if (Number.isFinite(priceChf) && priceChf > 0) return priceChf;
  if (Number.isFinite(price) && price > 0) return price;
  if (Number.isFinite(priceChf)) return priceChf;
  if (Number.isFinite(price)) return price;
  return 0;
}

function coerceLocalizedText(value, fallback = '') {
  if (value && typeof value === 'object') return String(value.de || value.fr || fallback || '');
  return String(value ?? fallback ?? '');
}

function parseBundleMeta(row) {
  const raw = String(row?.description_fr || '');
  const fallbackContent = String(row?.description_de || '');
  const base = { slot_type: 'normal', bundle_content_de: fallbackContent, bundle_content_fr: '', option_label_de: '', option_label_fr: '', quantity_options: [2, 3, 4] };
  if (!raw.startsWith(META_PREFIX)) return base;
  try {
    const meta = JSON.parse(raw.slice(META_PREFIX.length));
    const quantity_options = Array.isArray(meta?.quantity_options)
      ? meta.quantity_options.map((value) => Number(value)).filter((value) => Number.isFinite(value) && value > 0)
      : base.quantity_options;
    return {
      slot_type: meta?.slot_type === 'bundle' ? 'bundle' : 'normal',
      bundle_content_de: String(meta?.content_de ?? meta?.content ?? fallbackContent ?? ''),
      bundle_content_fr: coerceLocalizedText(meta?.content_fr ?? '', ''),
      option_label_de: coerceLocalizedText(meta?.option_label_de ?? '', ''),
      option_label_fr: coerceLocalizedText(meta?.option_label_fr ?? '', ''),
      quantity_options: quantity_options.length ? quantity_options : base.quantity_options
    };
  } catch (_) {
    return base;
  }
}

function encodeBundleMeta(row) {
  return `${META_PREFIX}${JSON.stringify({
    slot_type: row?.slot_type === 'bundle' ? 'bundle' : 'normal',
    content_de: coerceLocalizedText(row?.bundle_content_de || row?.bundle_content || row?.description_de || '', row?.description_de || ''),
    content_fr: coerceLocalizedText(row?.bundle_content_fr || '', ''),
    option_label_de: coerceLocalizedText(row?.option_label_de || '', ''),
    option_label_fr: coerceLocalizedText(row?.option_label_fr || '', ''),
    quantity_options: (Array.isArray(row?.quantity_options) ? row.quantity_options : []).map((value) => Number(value)).filter((value) => Number.isFinite(value) && value > 0)
  })}`;
}

function normalizeProductRow(row) {
  const meta = parseBundleMeta(row);
  return {
    id: row?.id || null,
    slot: Number(row?.slot || 0),
    name_de: coerceNameValue(row?.name_de, row?.name),
    name_fr: ('name_fr' in (row || {})) ? String(row?.name_fr ?? '') : '',
    description_de: String(row?.description_de || ''),
    description_fr: String(row?.description_fr || ''),
    price_chf: coercePrice(row),
    is_active: Boolean(row?.is_active ?? row?.active ?? false),
    image_url: row?.image_url || '',
    sort_order: Number(row?.sort_order ?? 0),
    slot_type: meta.slot_type,
    bundle_content_de: meta.bundle_content_de,
    bundle_content_fr: meta.bundle_content_fr || '',
    option_label_de: meta.option_label_de,
    option_label_fr: meta.option_label_fr || '',
    quantity_options: meta.quantity_options
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
      const nameFr = ('name_fr' in (item || {})) ? String(item?.name_fr ?? '').trim() : '';
      return {
        slot,
        name_de: nameDe,
        name_fr: nameFr,
        description_de: coerceLocalizedText(item?.bundle_content_de ?? item?.bundle_content ?? item?.description_de ?? '', item?.description_de ?? '').trim(),
        description_fr: coerceLocalizedText(item?.bundle_content_fr ?? item?.description_fr ?? '', '').trim(),
        price_chf: Number(item?.price_chf ?? item?.price ?? 0),
        is_active: Boolean(item?.is_active ?? item?.active),
        image_url: String(item?.image_url ?? '').trim(),
        sort_order: Number(item?.sort_order ?? 0),
        slot_type: item?.slot_type === 'bundle' ? 'bundle' : 'normal',
        bundle_content_de: coerceLocalizedText(item?.bundle_content_de ?? item?.bundle_content ?? item?.description_de ?? '', item?.description_de ?? '').trim(),
        bundle_content_fr: coerceLocalizedText(item?.bundle_content_fr ?? item?.description_fr ?? '', '').trim(),
        option_label_de: coerceLocalizedText(item?.option_label_de ?? '', '').trim(),
        option_label_fr: coerceLocalizedText(item?.option_label_fr ?? '', '').trim(),
        quantity_options: Array.isArray(item?.quantity_options) ? item.quantity_options : []
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

  const existingRows = await supa('products?select=id,slot');
  const existingBySlot = new Map(
    (Array.isArray(existingRows) ? existingRows : [])
      .map((row) => [Number(row?.slot || 0), row])
      .filter(([slot]) => Number.isInteger(slot) && slot > 0)
  );

  const incomingSlots = new Set(items.map((item) => item.slot));

  for (const item of items) {
    const price = Number.isFinite(item.price_chf) ? item.price_chf : 0;
    const nameDe = item.name_de || '';
    const nameFr = ('name_fr' in (item || {})) ? String(item.name_fr || '') : '';
    const active = item.is_active === true;
    const payload = {
      slot: item.slot,
      name: nameDe,
      name_de: nameDe,
      name_fr: nameFr,
      description_de: item.bundle_content_de || item.description_de || null,
      description_fr: encodeBundleMeta(item),
      price: price,
      price_chf: price,
      active,
      is_active: active,
      image_url: item.image_url || null,
      sort_order: Number.isFinite(item.sort_order) ? item.sort_order : 0,
      updated_at: new Date().toISOString()
    };

    if (existingBySlot.has(item.slot)) {
      await supa(`products?slot=eq.${encodeURIComponent(item.slot)}`, {
        method: 'PATCH',
        headers: { Prefer: 'return=representation' },
        body: JSON.stringify(payload)
      });
    } else {
      await supa('products', {
        method: 'POST',
        headers: { Prefer: 'return=representation' },
        body: JSON.stringify({ ...payload, created_at: new Date().toISOString() })
      });
    }
  }

  for (const [slot, row] of existingBySlot.entries()) {
    if (!incomingSlots.has(slot) && row?.id) {
      await supa(`products?id=eq.${encodeURIComponent(row.id)}`, { method: 'DELETE' });
    }
  }

  try {
    const existingSlots = await supa('slots?select=id,slot_number');
    const slotsByNumber = new Map((Array.isArray(existingSlots) ? existingSlots : []).map((row) => [Number(row?.slot_number || 0), row]).filter(([slot]) => Number.isInteger(slot) && slot > 0));
    for (const item of items) {
      const slotPayload = { slot_number: item.slot, is_active: item.is_active === true, updated_at: new Date().toISOString() };
      if (slotsByNumber.has(item.slot)) {
        await supa(`slots?slot_number=eq.${encodeURIComponent(item.slot)}`, {
          method: 'PATCH',
          headers: { Prefer: 'return=representation' },
          body: JSON.stringify(slotPayload)
        });
      } else {
        await supa('slots', {
          method: 'POST',
          headers: { Prefer: 'return=representation' },
          body: JSON.stringify({ ...slotPayload, created_at: new Date().toISOString(), product_id: null })
        });
      }
    }
    for (const [slot, row] of slotsByNumber.entries()) {
      if (!incomingSlots.has(slot) && row?.id) {
        await supa(`slots?id=eq.${encodeURIComponent(row.id)}`, { method: 'DELETE' });
      }
    }
  } catch (_) {
    // slots table is optional for the active preview flow; keep products save robust
  }

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
