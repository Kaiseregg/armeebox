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

async function supabasePatchOrderById(orderId, patch) {
  if (!orderId) return { skipped: true, reason: 'missing_order_id' };

  const supabaseUrl = requireEnv('SUPABASE_URL');
  const serviceRoleKey = requireEnv('SUPABASE_SERVICE_ROLE_KEY');

  const response = await fetch(
    `${supabaseUrl}/rest/v1/orders?id=eq.${encodeURIComponent(orderId)}`,
    {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        apikey: serviceRoleKey,
        Authorization: `Bearer ${serviceRoleKey}`,
        Prefer: 'return=minimal'
      },
      body: JSON.stringify(patch)
    }
  );

  const text = await response.text();
  if (!response.ok) {
    throw new Error(text || `Supabase update failed: ${response.status}`);
  }

  return { updated: true, order_id: orderId };
}

function orderIdFromSession(session) {
  return session?.metadata?.order_id || null;
}

export default async (request) => {
  if (request.method !== 'POST') {
    return json(405, { received: false, error: 'Method not allowed' });
  }

  let event;
  try {
    const stripe = new Stripe(requireEnv('STRIPE_SECRET_KEY'));
    const signature = request.headers.get('stripe-signature');
    if (!signature) return json(400, { received: false, error: 'Missing stripe-signature header' });

    const rawBody = await request.text();
    event = stripe.webhooks.constructEvent(rawBody, signature, requireEnv('STRIPE_WEBHOOK_SECRET'));
  } catch (error) {
    console.error('stripe-webhook signature failed', error);
    return json(400, { received: false, error: error?.message || 'Invalid Stripe signature' });
  }

  try {
    if (event.type === 'checkout.session.completed') {
      const session = event.data.object;
      const result = await supabasePatchOrderById(orderIdFromSession(session), {
        payment_status: 'paid',
        paid_at: new Date().toISOString(),
        stripe_checkout_session_id: session.id || null,
        stripe_payment_intent_id:
          typeof session.payment_intent === 'string' ? session.payment_intent : null,
        stripe_payment_method: Array.isArray(session.payment_method_types)
          ? session.payment_method_types.join(',')
          : null
      });
      return json(200, { received: true, type: event.type, result });
    }

    if (event.type === 'checkout.session.expired') {
      const session = event.data.object;
      const result = await supabasePatchOrderById(orderIdFromSession(session), {
        payment_status: 'cancelled'
      });
      return json(200, { received: true, type: event.type, result });
    }

    if (event.type === 'payment_intent.payment_failed') {
      return json(200, { received: true, type: event.type, ignored: true });
    }

    return json(200, { received: true, type: event.type, ignored: true });
  } catch (error) {
    // Stripe soll nicht endlos wiederholen, wenn nur das interne DB-Update temporär scheitert.
    // Der Fehler steht trotzdem in Netlify Logs und in der Stripe Response.
    console.error('stripe-webhook db update failed', error);
    return json(200, {
      received: true,
      type: event.type,
      db_warning: error?.message || 'DB update failed'
    });
  }
};
