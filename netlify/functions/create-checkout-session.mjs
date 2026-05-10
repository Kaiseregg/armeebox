import Stripe from 'stripe';

const json = (statusCode, body) =>
  new Response(JSON.stringify(body), {
    status: statusCode,
    headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' }
  });

function requireEnv(name) {
  const value = process.env[name];
  if (!value) throw new Error(`Missing environment variable: ${name}`);
  return value;
}

function isEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value || '').trim());
}

function toCents(value) {
  return Math.round(Number(value || 0) * 100);
}

function buildOrderNumber(orderId) {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  const shortId = String(orderId || '').replace(/-/g, '').slice(0, 6).toUpperCase();
  return `AB-${y}${m}${day}-${shortId}`;
}

async function supabaseRequest(path, options = {}) {
  const supabaseUrl = requireEnv('SUPABASE_URL');
  const serviceRoleKey = requireEnv('SUPABASE_SERVICE_ROLE_KEY');
  const response = await fetch(`${supabaseUrl}/rest/v1/${path}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      apikey: serviceRoleKey,
      Authorization: `Bearer ${serviceRoleKey}`,
      ...(options.headers || {})
    }
  });
  const data = await response.json().catch(() => null);
  if (!response.ok) throw new Error(data?.message || data?.error || `Supabase request failed: ${response.status}`);
  return data;
}

async function insertPendingOrder(payload) {
  const orderRow = {
    lang: payload.lang || 'de',
    status: 'payment_pending',
    order_status: 'payment_pending',
    payment_status: 'pending',
    payment_provider: 'stripe',
    shipping_method: payload.shipping_method,
    shipping_cost: Number(payload.shipping_cost || 0),
    subtotal: Number(payload.subtotal || 0),
    total: Number(payload.total || 0),
    item_count: Number(payload.item_count || 0),
    customer_email: payload.customer_email,
    barracks_label: payload.barracks_label,
    recipient_name: payload.recipient_name,
    order_meta: {
      ...(payload.order_meta || {}),
      payment_payload_items: Array.isArray(payload.items) ? payload.items : []
    },
    language: payload.lang || 'de',
    currency: 'CHF',
    subtotal_chf: Number(payload.subtotal || 0),
    shipping_chf: Number(payload.shipping_cost || 0),
    total_chf: Number(payload.total || 0)
  };

  const created = await supabaseRequest('orders', {
    method: 'POST',
    headers: { Prefer: 'return=representation' },
    body: JSON.stringify(orderRow)
  });
  const order = Array.isArray(created) ? created[0] : null;
  if (!order?.id) throw new Error('Failed to create pending order');

  const orderNumber = buildOrderNumber(order.id);
  const patched = await supabaseRequest(`orders?id=eq.${encodeURIComponent(order.id)}`, {
    method: 'PATCH',
    headers: { Prefer: 'return=representation' },
    body: JSON.stringify({ order_number: orderNumber })
  });
  const patchedOrder = Array.isArray(patched) ? patched[0] : null;
  if (!patchedOrder?.id) throw new Error('Failed to update order number');

  const items = Array.isArray(payload.items) ? payload.items : [];
  if (items.length) {
    const itemRows = items.map(item => {
      const unitPrice = Number(item.unit_price ?? item.price ?? 0);
      const quantity = Number(item.quantity ?? 1);
      const totalPrice = Number(item.total_price ?? unitPrice * quantity);
      return {
        order_id: patchedOrder.id,
        product_id: item.product_id != null ? Number(item.product_id) : null,
        slot_code: item.slot_code ?? null,
        product_name: item.product_name ?? item.name ?? 'Produkt',
        quantity,
        unit_price: unitPrice,
        total_price: totalPrice,
        unit_price_chf: unitPrice,
        total_price_chf: totalPrice
      };
    });

    await supabaseRequest('order_items', {
      method: 'POST',
      headers: { Prefer: 'return=minimal' },
      body: JSON.stringify(itemRows)
    });
  }

  return patchedOrder;
}

function buildLineItems(payload) {
  const items = Array.isArray(payload.items) ? payload.items : [];
  const lineItems = items.map(item => ({
    price_data: {
      currency: 'chf',
      product_data: { name: String(item.product_name || 'ARMEEBOX Produkt').slice(0, 120) },
      unit_amount: toCents(item.unit_price ?? item.price ?? 0)
    },
    quantity: Math.max(1, Math.floor(Number(item.quantity || 1)))
  }));

  const shipping = Number(payload.shipping_cost || 0);
  if (shipping > 0) {
    lineItems.push({
      price_data: {
        currency: 'chf',
        product_data: { name: 'Versand' },
        unit_amount: toCents(shipping)
      },
      quantity: 1
    });
  }

  return lineItems;
}

export default async (request) => {
  if (request.method !== 'POST') return json(405, { success: false, error: 'Method not allowed' });

  try {
    const payload = await request.json().catch(() => ({}));
    if (!Array.isArray(payload.items) || payload.items.length === 0) return json(400, { success: false, error: 'Cart is empty' });
    if (!isEmail(payload.customer_email)) return json(400, { success: false, error: 'Invalid customer email' });

    const stripe = new Stripe(requireEnv('STRIPE_SECRET_KEY'));
    const siteUrl = requireEnv('SITE_URL').replace(/\/$/, '');
    const order = await insertPendingOrder(payload);
    const lineItems = buildLineItems(payload);

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      payment_method_types: ['card', 'twint'],
      customer_email: payload.customer_email,
      line_items: lineItems,
      success_url: `${siteUrl}/#confirmation?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}/#review`,
      metadata: {
        order_id: String(order.id),
        order_number: String(order.order_number || ''),
        source: 'armeebox'
      }
    });

    await supabaseRequest(`orders?id=eq.${encodeURIComponent(order.id)}`, {
      method: 'PATCH',
      headers: { Prefer: 'return=minimal' },
      body: JSON.stringify({
        stripe_checkout_session_id: session.id,
        stripe_payment_intent_id: session.payment_intent || null,
        payment_status: 'pending'
      })
    });

    return json(200, {
      success: true,
      checkout_url: session.url,
      order: { id: order.id, order_number: order.order_number, customer_email: order.customer_email }
    });
  } catch (error) {
    console.error('create-checkout-session failed', error);
    return json(500, { success: false, error: error.message || 'Unexpected error' });
  }
};
