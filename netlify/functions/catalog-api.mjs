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

function normalizeProductRow(row) {
  return {
    id: row?.id || null,
    slot: Number(row?.slot || 0),
    name_de: String(row?.name_de || row?.name || ''),
    name_fr: String(row?.name_fr || row?.name_de || row?.name || ''),
    description_de: String(row?.description_de || ''),
    description_fr: String(row?.description_fr || ''),
    price_chf: Number(row?.price_chf ?? row?.price ?? 0),
    image_url: row?.image_url || '',
    is_active: Boolean(row?.is_active ?? row?.active ?? false),
    sort_order: Number(row?.sort_order ?? 0)
  };
}

export default async (request) => {
  try {
    const url = new URL(request.url);
    const action = url.searchParams.get('action') || 'products';
    if (action === 'products' && request.method === 'GET') {
      const rows = await supa('products?select=id,slot,name,name_de,name_fr,description_de,description_fr,price,price_chf,active,is_active,image_url,sort_order&is_active=eq.true&order=slot.asc');
      return json(200, { success: true, products: Array.isArray(rows) ? rows.map(normalizeProductRow) : [] });
    }
    return json(405, { success: false, error: 'Methode/Aktion nicht erlaubt' });
  } catch (error) {
    console.error('catalog-api failed', error);
    return json(200, { success: false, products: [], error: error.message || 'Unexpected error' });
  }
};
