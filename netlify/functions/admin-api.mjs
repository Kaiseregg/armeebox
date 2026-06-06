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

function parseQuantityOptions(value, fallback = [2, 3, 4]) {
  if (Array.isArray(value)) {
    const parsed = value.map((item) => Number(item)).filter((item) => Number.isFinite(item) && item > 0);
    return parsed.length ? parsed : fallback;
  }
  if (typeof value === 'string') {
    try {
      const json = JSON.parse(value);
      if (Array.isArray(json)) return parseQuantityOptions(json, fallback);
    } catch (_) {}
    const parsed = value.split(/[;,|\s]+/).map((item) => Number(String(item).replace(/x/gi, ''))).filter((item) => Number.isFinite(item) && item > 0);
    return parsed.length ? parsed : fallback;
  }
  return fallback;
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
  const fallbackContentDe = String(row?.description_de || '');
  const rawShowInfo = row?.show_info ?? row?.info_enabled ?? row?.has_info;
  const directSlotType = row?.slot_type === 'bundle' ? 'bundle' : 'normal';
  const direct = {
    slot_type: directSlotType,
    show_info: rawShowInfo === undefined || rawShowInfo === null ? directSlotType === 'bundle' : Boolean(rawShowInfo),
    bundle_content_de: coerceLocalizedText(row?.bundle_content_de ?? '', fallbackContentDe),
    bundle_content_fr: coerceLocalizedText(row?.bundle_content_fr ?? '', ''),
    option_label_de: coerceLocalizedText(row?.option_label_de ?? '', ''),
    option_label_fr: coerceLocalizedText(row?.option_label_fr ?? '', ''),
    quantity_options: parseQuantityOptions(row?.quantity_options, [2, 3, 4])
  };

  let legacy = {};
  if (raw.startsWith(META_PREFIX)) {
    try { legacy = JSON.parse(raw.slice(META_PREFIX.length)) || {}; } catch (_) { legacy = {}; }
  }

  const legacyOptions = parseQuantityOptions(legacy?.quantity_options, direct.quantity_options);
  const optionVariants = parseBundleOptions(legacy?.bundle_options || legacy?.option_variants || row?.bundle_options || row?.quantity_options || legacyOptions, legacyOptions);
  const slotType = direct.slot_type === 'bundle' || legacy?.slot_type === 'bundle' ? 'bundle' : 'normal';
  const showInfo = typeof legacy?.show_info === 'boolean' ? legacy.show_info : (rawShowInfo === undefined || rawShowInfo === null ? slotType === 'bundle' : Boolean(rawShowInfo));
  const imagePopupEnabled = typeof legacy?.image_popup_enabled === 'boolean' ? legacy.image_popup_enabled : Boolean(row?.image_popup_enabled ?? false);

  return {
    slot_type: slotType,
    show_info: showInfo,
    image_popup_enabled: imagePopupEnabled,
    additional_images: parseImageGallery(legacy?.additional_images || legacy?.gallery_images || row?.additional_images || row?.gallery_images || row?.image_gallery || []),
    bundle_content_de: direct.bundle_content_de || coerceLocalizedText(legacy?.content_de ?? legacy?.content ?? '', fallbackContentDe),
    bundle_content_fr: direct.bundle_content_fr || coerceLocalizedText(legacy?.content_fr ?? '', ''),
    option_label_de: direct.option_label_de || coerceLocalizedText(legacy?.option_label_de ?? '', ''),
    option_label_fr: direct.option_label_fr || coerceLocalizedText(legacy?.option_label_fr ?? '', ''),
    quantity_options: legacyOptions.length ? legacyOptions : [2, 3, 4],
    bundle_options: optionVariants
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
    is_active: Boolean(row?.is_active ?? row?.active ?? false),
    image_url: row?.image_url || '',
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
        stock_total: Number(item?.stock_total ?? item?.initial_stock ?? 0),
        stock_current: Number(item?.stock_current ?? item?.current_stock ?? item?.stock_total ?? 0),
        stock_min: Number(item?.stock_min ?? item?.minimum_stock ?? 0),
        slot_type: item?.slot_type === 'bundle' ? 'bundle' : 'normal',
        show_info: Boolean(item?.show_info),
        image_popup_enabled: Boolean(item?.image_popup_enabled ?? false),
        additional_images: parseImageGallery(item?.additional_images || item?.gallery_images || item?.image_gallery || []),
        bundle_content_de: coerceLocalizedText(item?.bundle_content_de ?? item?.bundle_content ?? item?.description_de ?? '', item?.description_de ?? '').trim(),
        bundle_content_fr: coerceLocalizedText(item?.bundle_content_fr ?? item?.description_fr ?? '', '').trim(),
        option_label_de: coerceLocalizedText(item?.option_label_de ?? '', '').trim(),
        option_label_fr: coerceLocalizedText(item?.option_label_fr ?? '', '').trim(),
        quantity_options: parseBundleOptions(item?.bundle_options || item?.quantity_options || []),
        bundle_options: parseBundleOptions(item?.bundle_options || item?.quantity_options || [])
      };
    })
    .filter(Boolean);
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

function normalizeDesignSettings(value) {
  const source = value && typeof value === 'object' ? value : {};
  return { ...DEFAULT_DESIGN_SETTINGS, ...source };
}

async function getSettingsRow() {
  const rows = await supa('site_settings?select=*&limit=1');
  return Array.isArray(rows) ? rows[0] : null;
}

async function getDesignSettings() {
  const row = await getSettingsRow().catch(() => null);
  const cms = row?.cms_settings && typeof row.cms_settings === 'object' ? row.cms_settings : {};
  const design = cms.design || row?.design_settings || row?.settings || {};
  return normalizeDesignSettings({
    ...design,
    machineTitle: design.machineTitle || row?.machine_title || row?.machineTitle || '',
    machineInner: design.machineInner || row?.machine_inner || row?.machineInner || ''
  });
}

async function saveDesignSettings(settings) {
  const clean = normalizeDesignSettings(settings || {});
  const row = await getSettingsRow();
  const cms = row?.cms_settings && typeof row.cms_settings === 'object' ? row.cms_settings : {};
  const nextCms = { ...cms, design: clean, updated_at: new Date().toISOString() };

  if (row?.id) {
    await supa(`site_settings?id=eq.${encodeURIComponent(row.id)}`, {
      method: 'PATCH',
      headers: { Prefer: 'return=minimal' },
      body: JSON.stringify({ cms_settings: nextCms })
    });
  } else {
    await supa('site_settings', {
      method: 'POST',
      headers: { Prefer: 'return=minimal' },
      body: JSON.stringify({ cms_settings: nextCms })
    });
  }
  return clean;
}

function cleanSlug(value) {
  return String(value || '')
    .toLowerCase()
    .trim()
    .replace(/ä/g, 'ae')
    .replace(/ö/g, 'oe')
    .replace(/ü/g, 'ue')
    .replace(/[éèê]/g, 'e')
    .replace(/[àâ]/g, 'a')
    .replace(/ç/g, 'c')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '') || `seite-${Date.now()}`;
}

function normalizePage(row, index = 0) {
  return {
    ...row,
    slug: cleanSlug(row?.slug || `seite-${index + 1}`),
    title_de: String(row?.title_de || ''),
    title_fr: String(row?.title_fr || ''),
    content_de: String(row?.content_de || ''),
    content_fr: String(row?.content_fr || ''),
    sort_order: Number(row?.sort_order ?? index + 1),
    show_in_menu: row?.show_in_menu !== false,
    is_active: row?.is_active !== false,
    page_type: String(row?.page_type || 'custom'),
    meta: row?.meta && typeof row.meta === 'object' ? row.meta : {}
  };
}

async function listSitePages() {
  const rows = await supa('site_pages?select=*&order=sort_order.asc,slug.asc');
  return (Array.isArray(rows) ? rows : []).map(normalizePage).sort((a, b) => Number(a.sort_order ?? 999) - Number(b.sort_order ?? 999) || String(a.slug || '').localeCompare(String(b.slug || '')));
}

async function saveSitePages(pages) {
  if (!Array.isArray(pages)) return listSitePages();

  const existingRows = await supa('site_pages?select=id,slug');
  const existingBySlug = new Map((Array.isArray(existingRows) ? existingRows : []).map((row) => [String(row.slug), row]));
  const incomingSlugs = new Set();

  for (let i = 0; i < pages.length; i += 1) {
    const page = normalizePage(pages[i], i);
    const slug = cleanSlug(page.slug);
    incomingSlugs.add(slug);

    const payload = {
      slug,
      title_de: page.title_de,
      title_fr: page.title_fr,
      content_de: page.content_de,
      content_fr: page.content_fr,
      sort_order: Number(page.sort_order ?? i + 1),
      show_in_menu: page.show_in_menu !== false,
      is_active: page.is_active !== false,
      page_type: page.page_type || 'custom',
      meta: page.meta || {}
    };

    if (existingBySlug.has(slug)) {
      await supa(`site_pages?slug=eq.${encodeURIComponent(slug)}`, {
        method: 'PATCH',
        headers: { Prefer: 'return=minimal' },
        body: JSON.stringify(payload)
      });
    } else {
      await supa('site_pages', {
        method: 'POST',
        headers: { Prefer: 'return=minimal' },
        body: JSON.stringify(payload)
      });
    }
  }

  for (const [slug, row] of existingBySlug.entries()) {
    if (!incomingSlugs.has(slug) && row?.id) {
      await supa(`site_pages?id=eq.${encodeURIComponent(row.id)}`, { method: 'DELETE' });
    }
  }

  return listSitePages();
}

async function logInventoryMovement(entry) {
  try {
    await supa('inventory_movements', {
      method: 'POST',
      headers: { Prefer: 'return=minimal' },
      body: JSON.stringify({
        product_id: entry.product_id || null,
        product_name: String(entry.product_name || ''),
        movement_type: String(entry.movement_type || 'manual'),
        quantity: Number(entry.quantity || 0),
        stock_before: Number(entry.stock_before || 0),
        stock_after: Number(entry.stock_after || 0),
        reason: String(entry.reason || ''),
        source: String(entry.source || 'admin'),
        created_at: new Date().toISOString()
      })
    });
  } catch (error) {
    console.warn('inventory movement skipped', error?.message || error);
  }
}

async function listInventoryMovements() {
  const rows = await supa('inventory_movements?select=*&order=created_at.desc&limit=80');
  return Array.isArray(rows) ? rows : [];
}

async function adjustStock(body) {
  const productId = body?.product_id || body?.id;
  const mode = String(body?.mode || 'add');
  const rawValue = Number(body?.value ?? body?.quantity ?? 0);
  if (!productId) throw new Error('Produkt fehlt');
  if (!Number.isFinite(rawValue)) throw new Error('Ungültiger Lagerwert');

  const rows = await supa(`products?select=id,name,name_de,stock_current,stock_total&id=eq.${encodeURIComponent(productId)}&limit=1`);
  const product = Array.isArray(rows) ? rows[0] : null;
  if (!product) throw new Error('Produkt nicht gefunden');

  const before = Math.max(0, Math.floor(Number(product.stock_current ?? 0) || 0));
  const totalBefore = Math.max(0, Math.floor(Number(product.stock_total ?? before) || 0));
  let after = before;
  let movementType = 'manual';
  let qty = 0;

  if (mode === 'set') {
    after = Math.max(0, Math.floor(rawValue));
    qty = after - before;
    movementType = 'correction';
  } else if (mode === 'remove') {
    qty = -Math.max(0, Math.floor(rawValue));
    after = Math.max(0, before + qty);
    movementType = 'manual_remove';
  } else {
    qty = Math.max(0, Math.floor(rawValue));
    after = before + qty;
    movementType = 'restock';
  }

  const nextTotal = mode === 'add' ? Math.max(totalBefore, after) : Math.max(totalBefore, after);
  await supa(`products?id=eq.${encodeURIComponent(productId)}`, {
    method: 'PATCH',
    headers: { Prefer: 'return=minimal' },
    body: JSON.stringify({ stock_current: after, stock_total: nextTotal, updated_at: new Date().toISOString() })
  });

  await logInventoryMovement({
    product_id: product.id,
    product_name: product.name_de || product.name || '',
    movement_type: movementType,
    quantity: qty,
    stock_before: before,
    stock_after: after,
    reason: body?.reason || 'Admin Lagerbuchung',
    source: 'admin'
  });

  return { product_id: product.id, before, after, quantity: qty };
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
      stock_total: Number.isFinite(item.stock_total) ? Math.max(0, Math.floor(item.stock_total)) : 0,
      stock_current: Number.isFinite(item.stock_current) ? Math.max(0, Math.floor(item.stock_current)) : 0,
      stock_min: Number.isFinite(item.stock_min) ? Math.max(0, Math.floor(item.stock_min)) : 0,
      slot_type: item.slot_type === 'bundle' ? 'bundle' : 'normal',
      bundle_content_de: item.bundle_content_de || item.description_de || null,
      bundle_content_fr: item.bundle_content_fr || null,
      option_label_de: item.option_label_de || null,
      option_label_fr: item.option_label_fr || null,
      quantity_options: parseBundleOptions(item.bundle_options || item.quantity_options, [2, 3, 4]).map((option) => Number(option.factor)).filter((value) => Number.isFinite(value) && value > 0),
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

async function getAnalytics() {
  const [ordersRaw, itemsRaw, productsRaw] = await Promise.all([
    supa('orders?select=id,order_number,created_at,customer_email,shipping_method,total,total_chf,order_status,status&order=created_at.desc&limit=1000'),
    supa('order_items?select=order_id,product_name,quantity,total_price,total_price_chf,line_total_chf,created_at&order=created_at.desc&limit=2000'),
    listProducts().catch(() => [])
  ]);

  const orders = Array.isArray(ordersRaw) ? ordersRaw.map(normalizeOrder) : [];
  const items = Array.isArray(itemsRaw) ? itemsRaw : [];
  const products = Array.isArray(productsRaw) ? productsRaw : [];
  const now = new Date();
  const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const start7 = new Date(startOfToday); start7.setDate(start7.getDate() - 6);
  const start30 = new Date(startOfToday); start30.setDate(start30.getDate() - 29);
  const startMonth = new Date(now.getFullYear(), now.getMonth(), 1);

  const amount = (order) => Number(order?.total ?? order?.total_chf ?? 0) || 0;
  const itemAmount = (item) => Number(item?.total_price ?? item?.total_price_chf ?? item?.line_total_chf ?? 0) || 0;
  const inRange = (value, start) => new Date(value || 0) >= start;
  const sumOrders = (list) => list.reduce((sum, order) => sum + amount(order), 0);

  const todayOrders = orders.filter(order => inRange(order.created_at, startOfToday));
  const weekOrders = orders.filter(order => inRange(order.created_at, start7));
  const monthOrders = orders.filter(order => inRange(order.created_at, startMonth));
  const thirtyOrders = orders.filter(order => inRange(order.created_at, start30));

  const statusCounts = orders.reduce((acc, order) => {
    const key = order.order_status || order.status || 'new';
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {});

  const shippingCounts = orders.reduce((acc, order) => {
    const key = String(order.shipping_method || 'unknown').trim() || 'unknown';
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {});

  const productStockRows = products.map((product) => {
    const current = Number(product.currentStock ?? product.current_stock ?? product.stock_current ?? 0) || 0;
    const min = Number(product.minStock ?? product.min_stock ?? product.stock_min ?? 0) || 0;
    const total = Number(product.totalStock ?? product.total_stock ?? product.stock_total ?? current) || 0;
    const price = Number(product.price ?? product.price_chf ?? 0) || 0;
    const slot = Number(product.slotNumber ?? product.slot ?? 0) || 0;
    const name = coerceNameValue(product?.name, product?.name_de || product?.name_fr || `Slot ${slot || ''}`);
    const status = current <= 0 ? 'empty' : (current <= min ? 'low' : 'ok');
    return { slot, name, current, min, total, price, value: current * price, status };
  }).sort((a,b) => a.slot - b.slot || a.name.localeCompare(b.name));
  const lowStock = productStockRows.filter((p) => p.status === 'low');
  const emptyStock = productStockRows.filter((p) => p.status === 'empty');
  const stockValue = productStockRows.reduce((sum, p) => sum + p.value, 0);

  const productMap = new Map();
  for (const item of items) {
    const key = String(item.product_name || 'Produkt');
    const existing = productMap.get(key) || { product_name: key, quantity: 0, revenue: 0 };
    existing.quantity += Number(item.quantity || 0) || 0;
    existing.revenue += itemAmount(item);
    productMap.set(key, existing);
  }

  const dailyMap = new Map();
  for (let i = 13; i >= 0; i -= 1) {
    const d = new Date(startOfToday); d.setDate(d.getDate() - i);
    const key = d.toISOString().slice(0, 10);
    dailyMap.set(key, { date: key, orders: 0, revenue: 0 });
  }
  for (const order of orders) {
    const key = new Date(order.created_at || 0).toISOString().slice(0, 10);
    if (dailyMap.has(key)) {
      const row = dailyMap.get(key);
      row.orders += 1;
      row.revenue += amount(order);
    }
  }

  const uniqueCustomers = new Set(orders.map(order => String(order.customer_email || '').trim().toLowerCase()).filter(Boolean));

  return {
    summary: {
      orders_total: orders.length,
      orders_today: todayOrders.length,
      orders_7d: weekOrders.length,
      orders_30d: thirtyOrders.length,
      revenue_total: sumOrders(orders),
      revenue_today: sumOrders(todayOrders),
      revenue_7d: sumOrders(weekOrders),
      revenue_month: sumOrders(monthOrders),
      avg_order_value: orders.length ? sumOrders(orders) / orders.length : 0,
      customers_total: uniqueCustomers.size,
      status_counts: statusCounts,
      shipping_counts: shippingCounts,
      products_total: productStockRows.length,
      products_low: lowStock.length,
      products_empty: emptyStock.length,
      inventory_value: stockValue
    },
    top_products: Array.from(productMap.values()).sort((a,b) => b.quantity - a.quantity || b.revenue - a.revenue).slice(0, 12),
    top_revenue_products: Array.from(productMap.values()).sort((a,b) => b.revenue - a.revenue || b.quantity - a.quantity).slice(0, 8),
    daily: Array.from(dailyMap.values()),
    low_stock: lowStock.slice(0, 12),
    empty_stock: emptyStock.slice(0, 12),
    recent_orders: orders.slice(0, 8).map((order) => ({
      order_number: order.order_number,
      created_at: order.created_at,
      customer_email: order.customer_email,
      total: amount(order),
      status: order.order_status || order.status || 'new',
      shipping_method: order.shipping_method || ''
    }))
  };
}

function safeEmail(value) {
  const email = String(value || '').trim().toLowerCase();
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? email : '';
}
function orderTotal(row) {
  return Number(row?.total ?? row?.total_chf ?? 0) || 0;
}
function orderName(row) {
  const meta = row?.order_meta && typeof row.order_meta === 'object' ? row.order_meta : {};
  return String(
    meta.privateName ||
    meta.senderName ||
    [meta.soldierFirstName, meta.soldierLastName].filter(Boolean).join(' ') ||
    row?.recipient_name ||
    ''
  ).trim();
}
async function listCustomersCrm() {
  const map = new Map();
  const touch = (email, patch = {}) => {
    const clean = safeEmail(email);
    if (!clean) return null;
    const current = map.get(clean) || {
      email: clean,
      name: '',
      order_count: 0,
      total_spent: 0,
      last_order_at: '',
      last_order_number: '',
      contact_count: 0,
      source: 'Kontakt'
    };
    const next = { ...current, ...patch };
    if (!next.name && current.name) next.name = current.name;
    map.set(clean, next);
    return next;
  };

  const orders = await supa('orders?select=id,order_number,created_at,customer_email,total,total_chf,recipient_name,order_meta&order=created_at.desc&limit=2000').catch(() => []);
  for (const order of Array.isArray(orders) ? orders : []) {
    const email = safeEmail(order.customer_email);
    if (!email) continue;
    const current = touch(email) || {};
    const created = String(order.created_at || '');
    const isNewer = !current.last_order_at || created > current.last_order_at;
    touch(email, {
      name: current.name || orderName(order),
      order_count: Number(current.order_count || 0) + 1,
      total_spent: Number(current.total_spent || 0) + orderTotal(order),
      last_order_at: isNewer ? created : current.last_order_at,
      last_order_number: isNewer ? String(order.order_number || '') : current.last_order_number,
      source: 'Kunde'
    });
  }

  const messages = await supa('contact_messages?select=*&order=created_at.desc&limit=2000').catch(() => []);
  for (const msg of Array.isArray(messages) ? messages : []) {
    const email = safeEmail(msg.email || msg.sender_email || msg.customer_email);
    if (!email) continue;
    const current = touch(email) || {};
    touch(email, {
      name: current.name || String(msg.name || msg.sender_name || '').trim(),
      contact_count: Number(current.contact_count || 0) + 1,
      source: Number(current.order_count || 0) > 0 ? 'Kunde + Kontakt' : 'Kontakt'
    });
  }

  const customersTable = await supa('customers?select=*&limit=2000').catch(() => []);
  for (const c of Array.isArray(customersTable) ? customersTable : []) {
    const email = safeEmail(c.email);
    if (!email) continue;
    const current = touch(email) || {};
    touch(email, {
      name: current.name || [c.first_name, c.last_name].filter(Boolean).join(' ') || c.name || '',
      source: current.source || 'Kunde'
    });
  }

  return Array.from(map.values()).sort((a, b) => {
    const bySpent = Number(b.total_spent || 0) - Number(a.total_spent || 0);
    if (bySpent) return bySpent;
    return String(b.last_order_at || '').localeCompare(String(a.last_order_at || '')) || String(a.email).localeCompare(String(b.email));
  });
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
      if (!id || !['new', 'in_progress', 'shipped', 'done', 'archived'].includes(status)) {
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

    if (action === 'delete-order' && request.method === 'POST') {
      const body = await request.json().catch(() => ({}));
      const id = body.id;
      if (!id) return json(400, { success: false, error: 'Missing order id' });

      await supa(`order_items?order_id=eq.${encodeURIComponent(id)}`, { method: 'DELETE' });
      await supa(`orders?id=eq.${encodeURIComponent(id)}`, { method: 'DELETE' });

      return json(200, { success: true, id });
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
      const movements = await listInventoryMovements().catch(() => []);
      return json(200, { success: true, products, movements });
    }

    if (action === 'adjust-stock' && request.method === 'POST') {
      const body = await request.json().catch(() => ({}));
      const result = await adjustStock(body);
      const products = await listProducts();
      const movements = await listInventoryMovements().catch(() => []);
      return json(200, { success: true, result, products, movements });
    }

    if (action === 'inventory-movements' && request.method === 'GET') {
      const movements = await listInventoryMovements();
      return json(200, { success: true, movements });
    }

    if (action === 'analytics' && request.method === 'GET') {
      const analytics = await getAnalytics();
      return json(200, { success: true, analytics });
    }

    if (action === 'customers' && request.method === 'GET') {
      const customers = await listCustomersCrm();
      return json(200, { success: true, customers });
    }

    return json(405, { success: false, error: 'Methode/Aktion nicht erlaubt' });
  } catch (error) {
    console.error('admin-api failed', error);
    return json(500, { success: false, error: error.message || 'Unexpected error' });
  }
};
