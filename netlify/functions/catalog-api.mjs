const META_PREFIX = '__ARMBX_META__';
function json(statusCode, body, headers = {}) {
  return new Response(JSON.stringify(body), {
    status: statusCode,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-store',
      ...headers
    }
  });
}

function requireEnv(name) {
  const value = process.env[name];
  if (!value) throw new Error(`Missing environment variable: ${name}`);
  return value;
}

function authHeaders() {
  const key = requireEnv('SUPABASE_SERVICE_ROLE_KEY');
  return {
    apikey: key,
    Authorization: `Bearer ${key}`,
    'Content-Type': 'application/json'
  };
}

async function supa(path) {
  const base = requireEnv('SUPABASE_URL');
  const response = await fetch(`${base}/rest/v1/${path}`, { headers: authHeaders() });
  const data = await response.json().catch(() => null);
  if (!response.ok) throw new Error(data?.message || data?.error || `Supabase request failed: ${response.status}`);
  return data;
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
      bundle_content_fr: String(meta?.content_fr ?? ''),
      option_label_de: String(meta?.option_label_de ?? ''),
      option_label_fr: String(meta?.option_label_fr ?? ''),
      quantity_options: quantity_options.length ? quantity_options : base.quantity_options
    };
  } catch (_) {
    return base;
  }
}

function encodeBundleMeta(row) {
  return `${META_PREFIX}${JSON.stringify({
    slot_type: row?.slot_type === 'bundle' ? 'bundle' : 'normal',
    content_de: String(row?.bundle_content_de || row?.bundle_content || row?.description_de || ''),
    content_fr: String(row?.bundle_content_fr || ''),
    option_label_de: String(row?.option_label_de || ''),
    option_label_fr: String(row?.option_label_fr || ''),
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
    image_url: row?.image_url || '',
    is_active: Boolean(row?.is_active ?? row?.active ?? false),
    sort_order: Number(row?.sort_order ?? 0),
    slot_type: meta.slot_type,
    bundle_content_de: meta.bundle_content_de,
    bundle_content_fr: meta.bundle_content_fr || meta.bundle_content_de,
    option_label_de: meta.option_label_de,
    option_label_fr: meta.option_label_fr || meta.option_label_de,
    quantity_options: meta.quantity_options
  };
}

export default async (request) => {
  try {
    const url = new URL(request.url);
    const action = url.searchParams.get('action') || 'products';
    if (action === 'products' && request.method === 'GET') {
      const rows = await supa('products?select=id,slot,name,name_de,name_fr,description_de,description_fr,price,price_chf,active,is_active,image_url,sort_order&or=(is_active.eq.true,active.eq.true)&order=slot.asc');
      return json(200, { success: true, products: Array.isArray(rows) ? rows.map(normalizeProductRow) : [] });
    }
    return json(405, { success: false, error: 'Methode/Aktion nicht erlaubt' });
  } catch (error) {
    console.error('catalog-api failed', error);
    return json(200, { success: false, products: [], error: error.message || 'Unexpected error' });
  }
};
