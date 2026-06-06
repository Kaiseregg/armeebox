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

async function supa(path, options = {}) {
  const base = requireEnv('SUPABASE_URL');
  const response = await fetch(`${base}/rest/v1/${path}`, { ...options, headers: { ...authHeaders(), ...(options.headers || {}) } });
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

function coerceLocalizedText(value, fallback = '') {
  if (value && typeof value === 'object') return String(value.de || value.fr || fallback || '');
  return String(value ?? fallback ?? '');
}


function optionFactorFromLabel(label) {
  const match = String(label || '').match(/(\d+(?:[.,]\d+)?)/);
  const n = match ? Number(match[1].replace(',', '.')) : 1;
  return Number.isFinite(n) && n > 0 ? n : 1;
}

function normalizeBundleOption(option, index = 0) {
  if (option && typeof option === 'object') {
    const labelDe = String(option.label_de ?? option.label ?? option.de ?? option.value ?? '').trim();
    const labelFr = String(option.label_fr ?? option.label ?? option.fr ?? option.value ?? '').trim();
    const fallbackLabel = labelDe || labelFr || `${Number(option.factor || index + 2)}x`;
    const factor = Number(option.factor ?? option.multiplier ?? option.qty ?? option.value ?? optionFactorFromLabel(fallbackLabel));
    return {
      label_de: labelDe || fallbackLabel,
      label_fr: labelFr || labelDe || fallbackLabel,
      factor: Number.isFinite(factor) && factor > 0 ? factor : optionFactorFromLabel(fallbackLabel)
    };
  }
  const raw = String(option ?? '').trim();
  if (!raw) return null;
  const numeric = Number(raw.replace(/x/gi, '').trim());
  const factor = Number.isFinite(numeric) && numeric > 0 ? numeric : optionFactorFromLabel(raw);
  const label = Number.isFinite(numeric) && numeric > 0 ? `${numeric}x` : raw;
  return { label_de: label, label_fr: label, factor };
}

function parseBundleOptions(value, fallback = [2, 3, 4]) {
  let source = value;
  if (typeof source === 'string') {
    try { source = JSON.parse(source); } catch (_) { source = source.split(/[;,|\n]+/).map((item) => item.trim()).filter(Boolean); }
  }
  if (!Array.isArray(source) || !source.length) source = fallback;
  const parsed = source.map((item, index) => normalizeBundleOption(item, index)).filter(Boolean);
  return parsed.length ? parsed : [
    { label_de: '2x', label_fr: '2x', factor: 2 },
    { label_de: '3x', label_fr: '3x', factor: 3 },
    { label_de: '4x', label_fr: '4x', factor: 4 }
  ];
}

function parseImageGallery(value) {
  let source = value;
  if (typeof source === 'string') {
    const trimmed = source.trim();
    if (!trimmed) return [];
    try { source = JSON.parse(trimmed); } catch (_) { source = trimmed.split(/[\n,;]+/).map((item) => item.trim()).filter(Boolean); }
  }
  if (!Array.isArray(source)) return [];
  return source
    .map((item) => typeof item === 'string' ? item : (item?.url || item?.image_url || ''))
    .map((url) => String(url || '').trim())
    .filter(Boolean)
    .filter((url, index, arr) => arr.indexOf(url) === index)
    .slice(0, 8);
}

function parseBundleMeta(row) {
  const raw = String(row?.description_fr || '');
  const fallbackContent = coerceLocalizedText(row?.description_de || '', '');
  let legacy = {};
  if (raw.startsWith(META_PREFIX)) {
    try { legacy = JSON.parse(raw.slice(META_PREFIX.length)) || {}; } catch (_) { legacy = {}; }
  }
  const bundle_options = parseBundleOptions(legacy?.bundle_options || legacy?.option_variants || row?.quantity_options || legacy?.quantity_options || [2, 3, 4]);
  const quantity_options = bundle_options.map((option) => Number(option.factor)).filter((value) => Number.isFinite(value) && value > 0);
  const slotType = row?.slot_type === 'bundle' || legacy?.slot_type === 'bundle' ? 'bundle' : 'normal';
  const rawShowInfo = row?.show_info ?? row?.info_enabled ?? row?.has_info;
  const showInfo = typeof legacy?.show_info === 'boolean' ? legacy.show_info : (rawShowInfo === undefined || rawShowInfo === null ? slotType === 'bundle' : Boolean(rawShowInfo));
  const imagePopupEnabled = typeof legacy?.image_popup_enabled === 'boolean' ? legacy.image_popup_enabled : Boolean(row?.image_popup_enabled ?? false);
  return {
    slot_type: slotType,
    show_info: showInfo,
    image_popup_enabled: imagePopupEnabled,
    additional_images: parseImageGallery(legacy?.additional_images || legacy?.gallery_images || row?.additional_images || row?.gallery_images || row?.image_gallery || []),
    bundle_content_de: coerceLocalizedText(row?.bundle_content_de ?? fallbackContent ?? legacy?.content_de ?? legacy?.content ?? '', fallbackContent),
    bundle_content_fr: coerceLocalizedText(row?.bundle_content_fr ?? legacy?.content_fr ?? '', ''),
    option_label_de: coerceLocalizedText(row?.option_label_de ?? legacy?.option_label_de ?? '', ''),
    option_label_fr: coerceLocalizedText(row?.option_label_fr ?? legacy?.option_label_fr ?? '', ''),
    quantity_options: quantity_options.length ? quantity_options : [2, 3, 4],
    bundle_options
  };
}

function encodeBundleMeta(row) {
  return `${META_PREFIX}${JSON.stringify({
    slot_type: row?.slot_type === 'bundle' ? 'bundle' : 'normal',
    show_info: Boolean(row?.show_info),
    image_popup_enabled: Boolean(row?.image_popup_enabled),
    additional_images: parseImageGallery(row?.additional_images || row?.gallery_images || row?.image_gallery || []),
    content_de: coerceLocalizedText(row?.bundle_content_de || row?.bundle_content || row?.description_de || '', row?.description_de || ''),
    content_fr: coerceLocalizedText(row?.bundle_content_fr || '', ''),
    option_label_de: coerceLocalizedText(row?.option_label_de || '', ''),
    option_label_fr: coerceLocalizedText(row?.option_label_fr || '', ''),
    quantity_options: parseBundleOptions(row?.bundle_options || row?.quantity_options || []).map((item) => Number(item.factor)).filter((value) => Number.isFinite(value) && value > 0),
    bundle_options: parseBundleOptions(row?.bundle_options || row?.quantity_options || [])
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
    stock_total: Number(row?.stock_total ?? row?.initial_stock ?? 0),
    stock_current: Number(row?.stock_current ?? row?.current_stock ?? row?.stock_total ?? row?.initial_stock ?? 0),
    stock_min: Number(row?.stock_min ?? row?.minimum_stock ?? 0),
    slot_type: meta.slot_type,
    show_info: Boolean(meta.show_info),
    image_popup_enabled: Boolean(meta.image_popup_enabled),
    additional_images: meta.additional_images || [],
    bundle_content_de: meta.bundle_content_de,
    bundle_content_fr: meta.bundle_content_fr || meta.bundle_content_de,
    option_label_de: meta.option_label_de,
    option_label_fr: meta.option_label_fr || meta.option_label_de,
    quantity_options: meta.quantity_options,
    bundle_options: meta.bundle_options
  };
}



const DEFAULT_DESIGN_SETTINGS = {
  machineTitle: '',
  machineInner: '',
  machineTitle_de: '',
  machineTitle_fr: '',
  machineInner_de: '',
  machineInner_fr: '',
  buttonColor: '#65a832',
  slotColor: '#3d5366',
  frameColor: '#b22b2b',
  bgColor: '#061527',
  bgImage: '',
  bgSize: 'cover',
  bgPosition: 'center center',
  logoUrl: '',
  minimumOrderChf: 15
};

async function getDesignSettings() {
  try {
    const rows = await supa('site_settings?select=*&limit=1');
    const row = Array.isArray(rows) ? rows[0] : null;
    const cms = row?.cms_settings && typeof row.cms_settings === 'object' ? row.cms_settings : {};
    const design = cms.design || row?.design_settings || row?.settings || {};
    return {
      ...DEFAULT_DESIGN_SETTINGS,
      ...design,
      machineTitle: design.machineTitle || row?.machine_title || row?.machineTitle || '',
      machineInner: design.machineInner || row?.machine_inner || row?.machineInner || ''
    };
  } catch (_) {
    return DEFAULT_DESIGN_SETTINGS;
  }
}

async function getSitePages() {
  try {
    const rows = await supa('site_pages?select=*&is_active=eq.true&order=sort_order.asc,slug.asc');
    return (Array.isArray(rows) ? rows : [])
      .map((row, index) => ({
        ...row,
        sort_order: Number(row?.sort_order ?? index + 1),
        show_in_menu: row?.show_in_menu !== false,
        is_active: row?.is_active !== false
      }))
      .filter((page) => page.is_active !== false)
      .sort((a, b) => Number(a.sort_order ?? 999) - Number(b.sort_order ?? 999) || String(a.slug || '').localeCompare(String(b.slug || '')));
  } catch (_) {
    return [];
  }
}

export default async (request) => {
  try {
    const url = new URL(request.url);
    const action = url.searchParams.get('action') || 'products';
    if (action === 'site' && request.method === 'GET') {
      const [settings, pages] = await Promise.all([getDesignSettings(), getSitePages()]);
      return json(200, { success: true, settings, pages });
    }

    if (action === 'products' && request.method === 'GET') {
      const rows = await supa('products?select=id,slot,name,name_de,name_fr,description_de,description_fr,price,price_chf,active,is_active,image_url,sort_order,stock_total,stock_current,stock_min,slot_type,bundle_content_de,bundle_content_fr,option_label_de,option_label_fr,quantity_options&or=(is_active.eq.true,active.eq.true)&order=slot.asc');
      return json(200, { success: true, products: Array.isArray(rows) ? rows.map(normalizeProductRow) : [] });
    }
    return json(405, { success: false, error: 'Methode/Aktion nicht erlaubt' });
  } catch (error) {
    console.error('catalog-api failed', error);
    return json(200, { success: false, products: [], error: error.message || 'Unexpected error' });
  }
};
