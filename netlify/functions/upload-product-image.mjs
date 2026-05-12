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
        if (idx < 0) return [decodeURIComponent(part), ''];
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

function extensionFromMime(mimeType) {
  if (mimeType === 'image/jpeg') return 'jpg';
  if (mimeType === 'image/png') return 'png';
  if (mimeType === 'image/webp') return 'webp';
  if (mimeType === 'image/gif') return 'gif';
  return '';
}

function cleanName(value) {
  return String(value || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 50) || 'produktbild';
}

export default async (request) => {
  if (request.method !== 'POST') {
    return json(405, { success: false, error: 'Method not allowed' });
  }

  try {
    if (!isAuthenticated(request)) {
      return json(401, { success: false, error: 'Nicht eingeloggt' });
    }

    const form = await request.formData();
    const file = form.get('file');
    const slot = cleanName(form.get('slot') || 'slot');

    if (!file || typeof file.arrayBuffer !== 'function') {
      return json(400, { success: false, error: 'Keine Bilddatei erhalten' });
    }

    const mimeType = String(file.type || '');
    const allowed = new Set(['image/jpeg', 'image/png', 'image/webp', 'image/gif']);
    if (!allowed.has(mimeType)) {
      return json(400, { success: false, error: 'Nur JPG, PNG, WebP oder GIF erlaubt' });
    }

    const maxBytes = 8 * 1024 * 1024;
    if (Number(file.size || 0) > maxBytes) {
      return json(400, { success: false, error: 'Bild ist zu gross. Maximum 8 MB.' });
    }

    const supabaseUrl = requireEnv('SUPABASE_URL').replace(/\/$/, '');
    const serviceRoleKey = requireEnv('SUPABASE_SERVICE_ROLE_KEY');
    const ext = extensionFromMime(mimeType) || cleanName(file.name).split('.').pop() || 'png';
    const objectPath = `slots/${slot}-${Date.now()}-${crypto.randomUUID().slice(0, 8)}.${ext}`;
    const uploadUrl = `${supabaseUrl}/storage/v1/object/products/${objectPath}`;

    const uploadResponse = await fetch(uploadUrl, {
      method: 'PUT',
      headers: {
        apikey: serviceRoleKey,
        Authorization: `Bearer ${serviceRoleKey}`,
        'Content-Type': mimeType,
        'x-upsert': 'true'
      },
      body: Buffer.from(await file.arrayBuffer())
    });

    const uploadData = await uploadResponse.json().catch(() => null);
    if (!uploadResponse.ok) {
      throw new Error(uploadData?.message || uploadData?.error || `Upload fehlgeschlagen (${uploadResponse.status})`);
    }

    const publicUrl = `${supabaseUrl}/storage/v1/object/public/products/${objectPath}`;
    return json(200, { success: true, path: objectPath, publicUrl });
  } catch (error) {
    console.error('upload-product-image failed', error);
    return json(500, { success: false, error: error.message || 'Upload fehlgeschlagen' });
  }
};
