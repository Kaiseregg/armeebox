import Stripe from 'stripe';
import nodemailer from 'nodemailer';

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

function money(value) {
  return `CHF ${Number(value || 0).toFixed(2)}`;
}

function textLine(value) {
  return String(value || '').trim();
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
      text ||
      `Supabase request failed: ${response.status}`;
    throw new Error(message);
  }

  return data;
}

async function fetchOrderWithItems(orderId) {
  const orders = await supabaseRequest(
    `orders?select=*&id=eq.${encodeURIComponent(orderId)}&limit=1`
  );
  const order = Array.isArray(orders) ? orders[0] : null;
  if (!order?.id) throw new Error(`Order not found: ${orderId}`);

  const items = await supabaseRequest(
    `order_items?select=*&order_id=eq.${encodeURIComponent(orderId)}&order=created_at.asc`
  );

  return { ...order, items: Array.isArray(items) ? items : [] };
}

async function patchOrder(orderId, patch) {
  await supabaseRequest(`orders?id=eq.${encodeURIComponent(orderId)}`, {
    method: 'PATCH',
    headers: { Prefer: 'return=minimal' },
    body: JSON.stringify(patch)
  });
}

function buildDeliveryText(order) {
  const meta = order.order_meta || {};
  const lines = [];

  if (order.shipping_method === 'private') {
    lines.push('Lieferadresse Privat:');
    lines.push(textLine(meta.privateName));
    lines.push(textLine(meta.privateStreet));
    lines.push(textLine(`${meta.privateZip || ''} ${meta.privateCity || ''}`));
    if (meta.privateEmail) lines.push(textLine(meta.privateEmail));
    if (meta.privatePhone) lines.push(textLine(meta.privatePhone));
  } else {
    lines.push('Lieferadresse Soldat:');
    lines.push(textLine(`${meta.soldierFirstName || ''} ${meta.soldierLastName || ''}`));
    const kpZug = `${meta.soldierKp ? `Kp: ${meta.soldierKp}` : ''}${meta.soldierKp && meta.soldierZug ? ' / ' : ''}${meta.soldierZug ? `Zug: ${meta.soldierZug}` : ''}`;
    if (kpZug.trim()) lines.push(kpZug);
    if (Array.isArray(meta.barracksAddress)) {
      for (const line of meta.barracksAddress) {
        if (line) lines.push(textLine(line));
      }
    }

    lines.push('');
    lines.push('Absender:');
    lines.push(textLine(meta.senderName));
    lines.push(textLine(meta.senderStreet));
    lines.push(textLine(meta.senderZip));
    if (meta.senderEmail) lines.push(textLine(meta.senderEmail));
  }

  if (meta.message) {
    lines.push('');
    lines.push('Nachricht an den Soldaten:');
    lines.push(textLine(meta.message));
  }

  return lines.filter(line => line !== '').join('\n');
}

function buildAdminMail(order) {
  const shippingLabel = order.shipping_method === 'private' ? 'Versand Privat' : 'Versand Kaserne';
  const lines = [
    'Neue BEZAHLTE ARMEEBOX Bestellung',
    `Bestellnummer: ${order.order_number}`,
    `Zahlungsstatus: bezahlt`,
    `Versandart: ${shippingLabel}`,
    `Total: ${money(order.total ?? order.total_chf)}`,
    `Kunden E-Mail: ${order.customer_email}`,
    '',
    'Artikel:'
  ];

  for (const item of order.items || []) {
    lines.push(`- ${item.product_name} | Menge ${item.quantity} | ${money(item.total_price ?? item.total_price_chf)}`);
  }

  lines.push('');
  lines.push(buildDeliveryText(order));

  return {
    subject: `BEZAHLT: Neue ARMEEBOX Bestellung ${order.order_number}`,
    text: lines.join('\n')
  };
}

function buildCustomerMail(order) {
  const shippingLabel = order.shipping_method === 'private' ? 'Versand Privat' : 'Versand Kaserne';
  const rows = (order.items || []).map(item => `
    <tr>
      <td style="padding:8px 10px;border-bottom:1px solid #d7dde7">${item.product_name}</td>
      <td style="padding:8px 10px;border-bottom:1px solid #d7dde7">${item.quantity}</td>
      <td style="padding:8px 10px;border-bottom:1px solid #d7dde7">${money(item.total_price ?? item.total_price_chf)}</td>
    </tr>
  `).join('');

  return {
    subject: `ARMEEBOX Zahlungs- und Bestellbestätigung ${order.order_number}`,
    html: `
      <div style="font-family:Arial,Helvetica,sans-serif;line-height:1.5;color:#111">
        <h2>Danke für deine Bestellung bei ARMEEBOX</h2>
        <p>Deine Zahlung wurde bestätigt und deine Bestellung wurde erfolgreich eingereicht.</p>
        <p>
          <strong>Bestellnummer:</strong> ${order.order_number}<br>
          <strong>Zahlungsstatus:</strong> bezahlt<br>
          <strong>Versandart:</strong> ${shippingLabel}<br>
          <strong>Total:</strong> ${money(order.total ?? order.total_chf)}
        </p>
        <pre style="font-family:Arial,Helvetica,sans-serif;white-space:pre-wrap;background:#f4f6f8;padding:12px;border-radius:8px">${buildDeliveryText(order)}</pre>
        <table style="border-collapse:collapse;width:100%;max-width:640px">
          <thead>
            <tr>
              <th align="left" style="padding:8px 10px;border-bottom:2px solid #111">Produkt</th>
              <th align="left" style="padding:8px 10px;border-bottom:2px solid #111">Menge</th>
              <th align="left" style="padding:8px 10px;border-bottom:2px solid #111">Betrag</th>
            </tr>
          </thead>
          <tbody>${rows}</tbody>
        </table>
        <p style="margin-top:16px">Diese E-Mail dient als Zahlungs- und Bestellbestätigung.</p>
      </div>
    `
  };
}

async function sendPaidOrderEmails(order) {
  const smtpHost = process.env.SMTP_HOST;
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const smtpFrom = process.env.SMTP_FROM;
  const adminTo = process.env.ORDER_NOTIFICATION_EMAIL || process.env.ADMIN_EMAIL;

  if (!smtpHost || !smtpUser || !smtpPass || !smtpFrom || !adminTo) {
    return { skipped: true, reason: 'missing_smtp_env' };
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: Number(process.env.SMTP_PORT || 587),
    secure: String(process.env.SMTP_SECURE || 'false') === 'true',
    auth: { user: smtpUser, pass: smtpPass }
  });

  const adminMail = buildAdminMail(order);
  const customerMail = buildCustomerMail(order);

  await transporter.sendMail({
    from: smtpFrom,
    to: adminTo,
    subject: adminMail.subject,
    text: adminMail.text
  });

  if (order.customer_email) {
    await transporter.sendMail({
      from: smtpFrom,
      to: order.customer_email,
      subject: customerMail.subject,
      html: customerMail.html
    });
  }

  return { admin_sent: true, customer_sent: Boolean(order.customer_email) };
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
      const orderId = orderIdFromSession(session);
      if (!orderId) return json(200, { received: true, type: event.type, skipped: 'missing_order_id' });

      const orderBefore = await fetchOrderWithItems(orderId);
      const metaBefore = orderBefore.order_meta || {};
      const alreadySent = Boolean(metaBefore.paid_email_sent_at);

      await patchOrder(orderId, {
        payment_status: 'paid',
        paid_at: new Date().toISOString(),
        stripe_checkout_session_id: session.id || null,
        stripe_payment_intent_id:
          typeof session.payment_intent === 'string' ? session.payment_intent : null,
        stripe_payment_method: Array.isArray(session.payment_method_types)
          ? session.payment_method_types.join(',')
          : null
      });

      let emailResult = { skipped: true, reason: 'already_sent' };
      if (!alreadySent) {
        const orderAfter = await fetchOrderWithItems(orderId);
        emailResult = await sendPaidOrderEmails(orderAfter);

        await patchOrder(orderId, {
          order_meta: {
            ...(orderAfter.order_meta || {}),
            paid_email_sent_at: new Date().toISOString()
          }
        });
      }

      return json(200, {
        received: true,
        type: event.type,
        order_id: orderId,
        email: emailResult
      });
    }

    if (event.type === 'checkout.session.expired') {
      const session = event.data.object;
      const orderId = orderIdFromSession(session);
      if (orderId) await patchOrder(orderId, { payment_status: 'cancelled' });
      return json(200, { received: true, type: event.type, order_id: orderId || null });
    }

    if (event.type === 'payment_intent.payment_failed') {
      return json(200, { received: true, type: event.type, ignored: true });
    }

    return json(200, { received: true, type: event.type, ignored: true });
  } catch (error) {
    // Stripe soll nicht hängen bleiben, aber der Fehler bleibt in Netlify Logs sichtbar.
    console.error('stripe-webhook internal handling failed', error);
    return json(200, {
      received: true,
      type: event.type,
      warning: error?.message || 'Internal handling failed'
    });
  }
};
