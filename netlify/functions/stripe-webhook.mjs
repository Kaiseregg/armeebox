import Stripe from 'stripe';

const json = (statusCode, body) =>
  new Response(JSON.stringify(body), {
    status: statusCode,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-store'
    }
  });

function requireEnv(name) {
  const value = process.env[name];
  if (!value) throw new Error(`Missing environment variable: ${name}`);
  return value;
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

  const text = await response.text();
  let data = null;
  try {
    data = text ? JSON.parse(text) : null;
  } catch {
    data = text;
  }

  if (!response.ok) {
    const message =
      (data && typeof data === 'object' && (data.message || data.error || data.details)) ||
      `Supabase request failed: ${response.status}`;
    throw new Error(message);
  }

  return data;
}

async function markOrderPaid(session) {
  const orderId = session?.metadata?.order_id;
  if (!orderId) return { skipped: true, reason: 'missing_order_id' };

  const patch = {
    status: 'paid',
    order_status: 'paid',
    payment_status: 'paid',
    paid_at: new Date().toISOString(),
    stripe_checkout_session_id: session.id || null,
    stripe_payment_intent_id:
      typeof session.payment_intent === 'string' ? session.payment_intent : null,
    stripe_payment_method: Array.isArray(session.payment_method_types)
      ? session.payment_method_types.join(',')
      : null
  };

  await supabaseRequest(`orders?id=eq.${encodeURIComponent(orderId)}`, {
    method: 'PATCH',
    headers: { Prefer: 'return=minimal' },
    body: JSON.stringify(patch)
  });

  return { updated: true, order_id: orderId };
}

async function markOrderCancelled(session) {
  const orderId = session?.metadata?.order_id;
  if (!orderId) return { skipped: true, reason: 'missing_order_id' };

  await supabaseRequest(`orders?id=eq.${encodeURIComponent(orderId)}`, {
    method: 'PATCH',
    headers: { Prefer: 'return=minimal' },
    body: JSON.stringify({
      payment_status: 'cancelled'
    })
  });

  return { updated: true, order_id: orderId };
}

export default async (request) => {
  if (request.method !== 'POST') {
    return json(405, { received: false, error: 'Method not allowed' });
  }

  try {
    const stripe = new Stripe(requireEnv('STRIPE_SECRET_KEY'));
    const signature = request.headers.get('stripe-signature');

    if (!signature) {
      return json(400, { received: false, error: 'Missing stripe-signature header' });
    }

    const rawBody = await request.text();
    const event = stripe.webhooks.constructEvent(
      rawBody,
      signature,
      requireEnv('STRIPE_WEBHOOK_SECRET')
    );

    let result = { ignored: true, type: event.type };

    if (event.type === 'checkout.session.completed') {
      result = await markOrderPaid(event.data.object);
    }

    if (event.type === 'checkout.session.expired') {
      result = await markOrderCancelled(event.data.object);
    }

    return json(200, { received: true, type: event.type, result });
  } catch (error) {
    console.error('stripe-webhook failed', error);
    return json(400, {
      received: false,
      error: error?.message || 'Webhook error'
    });
  }
};
