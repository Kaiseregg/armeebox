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
    name_fr: coerceNameValue(row?.name_fr, row?.name_de || row?.name),
    description_de: String(row?.description_de || ''),
    description_fr: String(row?.description_fr || ''),
    price_chf: coercePrice(row),
    is_active: Boolean(row?.is_active ?? row?.active ?? false),
    image_url: row?.image_url || '',
    sort_order: Number(row?.sort_order ?? 0),
    slot_type: meta.slot_type,
    bundle_content_de: meta.bundle_content_de,
    bundle_content_fr: meta.bundle_content_fr || meta.bundle_content_de,
    option_label_de: meta.option_label_de,
    option_label_fr: meta.option_label_fr || meta.option_label_de,
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
      const nameFr = String(item?.name_fr ?? item?.name_de ?? item?.name ?? item?.product_name ?? '').trim();
      return {
        slot,
        name_de: nameDe,
        name_fr: nameFr || nameDe,
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


const DEFAULT_DESIGN_SETTINGS = { machineTitle: '', machineInner: '', machineTitle_de: '', machineTitle_fr: '', machineInner_de: '', machineInner_fr: '', buttonColor: '#65a832', slotColor: '#3d5366', frameColor: '#b22b2b', bgColor: '#061527' };
async function getDesignSettings() {
  try {
    const rows = await supa('admin_settings?select=*&key=eq.design_settings&limit=1');
    const row = Array.isArray(rows) ? rows[0] : null;
    const value = row?.value || row?.settings || row?.data || null;
    if (value && typeof value === 'object') return { ...DEFAULT_DESIGN_SETTINGS, ...value };
    if (typeof value === 'string') return { ...DEFAULT_DESIGN_SETTINGS, ...JSON.parse(value) };
  } catch (_) {}
  try {
    const rows = await supa('site_settings?select=*&limit=1');
    const row = Array.isArray(rows) ? rows[0] : null;
    if (row) return { ...DEFAULT_DESIGN_SETTINGS, ...(row.design_settings || row.settings || {}), machineTitle: row.machine_title || row.machineTitle || DEFAULT_DESIGN_SETTINGS.machineTitle, machineInner: row.machine_inner || row.machineInner || DEFAULT_DESIGN_SETTINGS.machineInner };
  } catch (_) {}
  return DEFAULT_DESIGN_SETTINGS;
}
async function saveDesignSettings(settings) {
  const clean = { ...DEFAULT_DESIGN_SETTINGS, ...(settings || {}) };
  try {
    const existing = await supa('admin_settings?select=*&key=eq.design_settings&limit=1');
    if (Array.isArray(existing) && existing[0]) {
      await supa('admin_settings?key=eq.design_settings', { method: 'PATCH', headers: { Prefer: 'return=minimal' }, body: JSON.stringify({ value: clean, updated_at: new Date().toISOString() }) });
    } else {
      await supa('admin_settings', { method: 'POST', headers: { Prefer: 'return=minimal' }, body: JSON.stringify({ key: 'design_settings', value: clean, created_at: new Date().toISOString(), updated_at: new Date().toISOString() }) });
    }
  } catch (error) {
    console.warn('admin_settings save failed, settings will still be returned for this session', error.message);
  }
  return clean;
}
async function getPagesMeta() {
  try {
    const rows = await supa('admin_settings?select=*&key=eq.cms_pages_meta&limit=1');
    const row = Array.isArray(rows) ? rows[0] : null;
    const value = row?.value || row?.settings || row?.data || null;
    if (value && typeof value === 'object') return value;
    if (typeof value === 'string') return JSON.parse(value);
  } catch (_) {}
  return {};
}
async function savePagesMeta(meta) {
  const clean = meta && typeof meta === 'object' ? meta : {};
  try {
    const existing = await supa('admin_settings?select=*&key=eq.cms_pages_meta&limit=1');
    if (Array.isArray(existing) && existing[0]) {
      await supa('admin_settings?key=eq.cms_pages_meta', { method: 'PATCH', headers: { Prefer: 'return=minimal' }, body: JSON.stringify({ value: clean, updated_at: new Date().toISOString() }) });
    } else {
      await supa('admin_settings', { method: 'POST', headers: { Prefer: 'return=minimal' }, body: JSON.stringify({ key: 'cms_pages_meta', value: clean, created_at: new Date().toISOString(), updated_at: new Date().toISOString() }) });
    }
  } catch (error) { console.warn('cms_pages_meta save failed', error.message); }
  return clean;
}
function withPageMeta(rows, meta) {
  return (Array.isArray(rows) ? rows : []).map((row, index) => { const m = meta?.[row.slug] || {}; return { ...row, sort_order: Number(m.sort_order ?? index + 1), show_in_menu: m.show_in_menu !== false, is_active: m.is_active !== false }; }).sort((a,b)=>Number(a.sort_order ?? 999)-Number(b.sort_order ?? 999) || String(a.slug||'').localeCompare(String(b.slug||'')));
}
function cleanSlug(value) { return String(value || '').toLowerCase().trim().replace(/ä/g,'ae').replace(/ö/g,'oe').replace(/ü/g,'ue').replace(/[éèê]/g,'e').replace(/[àâ]/g,'a').replace(/ç/g,'c').replace(/[^a-z0-9]+/g,'-').replace(/^-+|-+$/g,'') || `seite-${Date.now()}`; }
async function listSitePages() {
  try { const rows = await supa('site_pages?select=*&order=slug.asc'); const meta = await getPagesMeta(); return withPageMeta(rows, meta); } catch (_) { return []; }
}
async function saveSitePages(pages) {
  if (!Array.isArray(pages)) return listSitePages();
  const existingRows = await supa('site_pages?select=id,slug');
  const existingBySlug = new Map((Array.isArray(existingRows) ? existingRows : []).map(r => [String(r.slug), r]));
  const incomingSlugs = new Set();
  const meta = {};
  for (let i = 0; i < pages.length; i++) {
    const page = pages[i] || {};
    const slug = cleanSlug(page.slug);
    if (!slug) continue;
    incomingSlugs.add(slug);
    const payload = { slug, title_de: String(page.title_de || ''), title_fr: String(page.title_fr || ''), content_de: String(page.content_de || ''), content_fr: String(page.content_fr || '') };
    meta[slug] = { sort_order: Number(page.sort_order ?? i + 1), show_in_menu: page.show_in_menu !== false, is_active: page.is_active !== false };
    if (existingBySlug.has(slug)) {
      await supa(`site_pages?slug=eq.${encodeURIComponent(slug)}`, { method: 'PATCH', headers: { Prefer: 'return=minimal' }, body: JSON.stringify(payload) });
    } else {
      await supa('site_pages', { method: 'POST', headers: { Prefer: 'return=minimal' }, body: JSON.stringify(payload) });
    }
  }
  for (const [slug, row] of existingBySlug.entries()) {
    if (!incomingSlugs.has(slug) && row?.id) await supa(`site_pages?id=eq.${encodeURIComponent(row.id)}`, { method: 'DELETE' });
  }
  await savePagesMeta(meta);
  return listSitePages();
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
    const nameFr = item.name_fr || nameDe;
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

    if (action === 'design' && request.method === 'GET') {
      const [settings, pages] = await Promise.all([getDesignSettings(), listSitePages()]);
      return json(200, { success: true, settings, pages });
    }

    if (action === 'design' && request.method === 'POST') {
      const body = await request.json().catch(() => ({}));
      const settings = await saveDesignSettings(body.settings || {});
      const pages = await saveSitePages(body.pages || []);
      return json(200, { success: true, settings, pages });
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
