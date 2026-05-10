import Stripe from 'stripe';
import nodemailer from 'nodemailer';

const json = (statusCode, body) => new Response(JSON.stringify(body), { status: statusCode, headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' } });

function requireEnv(name) { const value = process.env[name]; if (!value) throw new Error(`Missing environment variable: ${name}`); return value; }
function money(value) { return `CHF ${Number(value || 0).toFixed(2)}`; }

async function supabaseRequest(path, options = {}) {
  const supabaseUrl = requireEnv('SUPABASE_URL');
  const serviceRoleKey = requireEnv('SUPABASE_SERVICE_ROLE_KEY');
  const response = await fetch(`${supabaseUrl}/rest/v1/${path}`, {
    ...options,
    headers: { 'Content-Type': 'application/json', apikey: serviceRoleKey, Authorization: `Bearer ${serviceRoleKey}`, ...(options.headers || {}) }
  });
  const data = await response.json().catch(() => null);
  if (!response.ok) throw new Error(data?.message || data?.error || `Supabase request failed: ${response.status}`);
  return data;
}

async function logInventorySale(entry) {
  try {
    await supabaseRequest('inventory_movements', {
      method: 'POST', headers: { Prefer: 'return=minimal' }, body: JSON.stringify({
        product_id: entry.product_id || null,
        product_name: entry.product_name || '',
        movement_type: 'sale',
        quantity: -Math.abs(Number(entry.quantity || 0)),
        stock_before: Number(entry.stock_before || 0),
        stock_after: Number(entry.stock_after || 0),
        reason: entry.reason || 'Bezahlte Bestellung',
        source: 'stripe',
        created_at: new Date().toISOString()
      })
    });
  } catch (error) { console.warn('inventory sale movement skipped', error?.message || error); }
}

async function reduceStockForOrder(items, orderNumber) {
  for (const item of Array.isArray(items) ? items : []) {
    const qty = Math.max(0, Math.floor(Number(item.stock_quantity ?? item.quantity ?? 0) || 0));
    if (!qty) continue;
    const productId = String(item.product_id || '').trim();
    const slotNumber = Number(String(item.slot_code || '').replace(/^0+/, '') || 0);
    let rows = [];
    if (productId && productId !== 'null' && productId !== 'undefined' && productId !== 'NaN') {
      rows = await supabaseRequest(`products?select=id,name,name_de,stock_current,stock_total&id=eq.${encodeURIComponent(productId)}&limit=1`).catch(() => []);
    }
    if ((!Array.isArray(rows) || !rows[0]) && Number.isFinite(slotNumber) && slotNumber > 0) {
      rows = await supabaseRequest(`products?select=id,name,name_de,stock_current,stock_total&slot=eq.${encodeURIComponent(slotNumber)}&limit=1`).catch(() => []);
    }
    const product = Array.isArray(rows) ? rows[0] : null;
    if (!product?.id) continue;
    const before = Math.max(0, Math.floor(Number(product.stock_current ?? product.stock_total ?? 0) || 0));
    const after = Math.max(0, before - qty);
    await supabaseRequest(`products?id=eq.${encodeURIComponent(product.id)}`, { method: 'PATCH', headers: { Prefer: 'return=minimal' }, body: JSON.stringify({ stock_current: after, updated_at: new Date().toISOString() }) });
    await logInventorySale({ product_id: product.id, product_name: product.name_de || product.name || item.product_name || '', quantity: qty, stock_before: before, stock_after: after, reason: orderNumber ? `Bezahlte Bestellung ${orderNumber}` : 'Bezahlte Bestellung' });
  }
}

function buildCustomerMail(order) {
  const shippingLabel = order.shipping_method === 'private' ? 'Versand Privat' : 'Versand Kaserne';
  const meta = order.order_meta || {};
  const itemsHtml = order.items.map(item => `<tr><td style="padding:6px 10px;border-bottom:1px solid #ddd">${item.product_name}</td><td style="padding:6px 10px;border-bottom:1px solid #ddd">${item.quantity}</td><td style="padding:6px 10px;border-bottom:1px solid #ddd">${money(item.total_price)}</td></tr>`).join('');
  let deliveryAddressHtml = '';
  let senderHtml = '';
  if (order.shipping_method === 'private') {
    deliveryAddressHtml = `<p><strong>Lieferadresse</strong><br>${meta.privateName || ''}<br>${meta.privateStreet || ''}<br>${meta.privateZip || ''} ${meta.privateCity || ''}<br>${meta.privateEmail ? `${meta.privateEmail}<br>` : ''}${meta.privatePhone || ''}</p>`;
  } else {
    const barracksLines = Array.isArray(meta.barracksAddress) ? meta.barracksAddress.filter(Boolean) : [];
    deliveryAddressHtml = `<p><strong>Lieferadresse Soldat</strong><br>${meta.soldierFirstName || ''} ${meta.soldierLastName || ''}<br>${meta.soldierKp ? `Kp: ${meta.soldierKp}` : ''}${meta.soldierKp && meta.soldierZug ? ' / ' : ''}${meta.soldierZug ? `Zug: ${meta.soldierZug}` : ''}<br>${barracksLines.join('<br>')}</p>`;
    senderHtml = `<p><strong>Absender</strong><br>${meta.senderName || ''}<br>${meta.senderStreet || ''}<br>${meta.senderZip || ''}<br>${meta.senderEmail || ''}</p>`;
  }
  return { subject: `ARMEEBOX Zahlungs- und Bestellbestätigung ${order.order_number}`, html: `<div style="font-family:Arial,Helvetica,sans-serif;line-height:1.5;color:#111"><h2>Danke für deine Bestellung bei ARMEEBOX</h2><p>Deine Zahlung wurde erfolgreich bestätigt.</p><p><strong>Bestellnummer:</strong> ${order.order_number}<br><strong>Versandart:</strong> ${shippingLabel}<br><strong>Total:</strong> ${money(order.total)}</p>${deliveryAddressHtml}${senderHtml}${meta.message ? `<p><strong>Nachricht an den Soldaten:</strong><br>${meta.message}</p>` : ''}<table style="border-collapse:collapse;width:100%;max-width:620px"><thead><tr><th align="left" style="padding:6px 10px;border-bottom:2px solid #333">Produkt</th><th align="left" style="padding:6px 10px;border-bottom:2px solid #333">Menge</th><th align="left" style="padding:6px 10px;border-bottom:2px solid #333">Betrag</th></tr></thead><tbody>${itemsHtml}</tbody></table><p style="margin-top:16px">Diese E-Mail dient als Zahlungs- und Bestellbestätigung.</p></div>` };
}

function buildAdminMail(order) {
  const meta = order.order_meta || {};
  const shippingLabel = order.shipping_method === 'private' ? 'Versand Privat' : 'Versand Kaserne';
  const lines = ['Neue bezahlte ARMEEBOX Bestellung', `Bestellnummer: ${order.order_number}`, `Versandart: ${shippingLabel}`, `Total: ${money(order.total)}`, `Kunden E-Mail: ${order.customer_email}`, '', 'Artikel:'];
  for (const item of order.items) lines.push(`- ${item.product_name} | Menge ${item.quantity} | ${money(item.total_price)}`);
  lines.push('');
  if (order.shipping_method === 'private') {
    lines.push('Lieferadresse Privat:', meta.privateName || '', meta.privateStreet || '', `${meta.privateZip || ''} ${meta.privateCity || ''}`.trim());
    if (meta.privateEmail) lines.push(meta.privateEmail); if (meta.privatePhone) lines.push(meta.privatePhone);
  } else {
    lines.push('Lieferadresse Soldat:', `${meta.soldierFirstName || ''} ${meta.soldierLastName || ''}`.trim(), `${meta.soldierKp ? `Kp: ${meta.soldierKp}` : ''}${meta.soldierKp && meta.soldierZug ? ' / ' : ''}${meta.soldierZug ? `Zug: ${meta.soldierZug}` : ''}`);
    if (Array.isArray(meta.barracksAddress)) for (const line of meta.barracksAddress) if (line) lines.push(line);
    lines.push('', 'Absender:', meta.senderName || '', meta.senderStreet || '', meta.senderZip || '');
    if (meta.senderEmail) lines.push(meta.senderEmail);
  }
  if (meta.message) lines.push('', 'Nachricht an den Soldaten:', meta.message);
  return { subject: `Neue bezahlte ARMEEBOX Bestellung ${order.order_number}`, text: lines.join('\n') };
}

async function sendEmails(order) {
  const smtpHost = process.env.SMTP_HOST, smtpUser = process.env.SMTP_USER, smtpPass = process.env.SMTP_PASS, smtpFrom = process.env.SMTP_FROM;
  if (!smtpHost || !smtpUser || !smtpPass || !smtpFrom) return { customer_sent: false, admin_sent: false, skipped: true };
  const transporter = nodemailer.createTransport({ host: smtpHost, port: Number(process.env.SMTP_PORT || 587), secure: String(process.env.SMTP_SECURE || 'false') === 'true', auth: { user: smtpUser, pass: smtpPass } });
  const orderNotificationEmail = process.env.ORDER_NOTIFICATION_EMAIL || 'order@armeebox.ch';
  const customerMail = buildCustomerMail(order); const adminMail = buildAdminMail(order);
  const customerInfo = await transporter.sendMail({ from: smtpFrom, to: order.customer_email, subject: customerMail.subject, html: customerMail.html });
  const adminInfo = await transporter.sendMail({ from: smtpFrom, to: orderNotificationEmail, subject: adminMail.subject, text: adminMail.text });
  return { customer_sent: Boolean(customerInfo?.messageId), admin_sent: Boolean(adminInfo?.messageId), skipped: false };
}

async function fulfillPaidSession(session) {
  const orderId = session.metadata?.order_id;
  if (!orderId) throw new Error('Missing order_id metadata');
  const rows = await supabaseRequest(`orders?select=*&id=eq.${encodeURIComponent(orderId)}&limit=1`);
  const order = Array.isArray(rows) ? rows[0] : null;
  if (!order?.id) throw new Error('Order not found');
  if (order.payment_status === 'paid' || order.order_status === 'paid' || order.status === 'paid') return { skipped: true, reason: 'already_paid' };

  const meta = order.order_meta || {};
  const items = Array.isArray(meta.payment_payload_items) ? meta.payment_payload_items : await supabaseRequest(`order_items?select=*&order_id=eq.${encodeURIComponent(order.id)}`);

  await reduceStockForOrder(items, order.order_number);
  const orderForMail = { ...order, items, order_meta: meta };
  const email = await sendEmails(orderForMail);

  await supabaseRequest(`orders?id=eq.${encodeURIComponent(order.id)}`, {
    method: 'PATCH', headers: { Prefer: 'return=minimal' }, body: JSON.stringify({
      status: 'paid', order_status: 'paid', payment_status: 'paid', paid_at: new Date().toISOString(),
      stripe_checkout_session_id: session.id,
      stripe_payment_intent_id: typeof session.payment_intent === 'string' ? session.payment_intent : null,
      stripe_payment_method: Array.isArray(session.payment_method_types) ? session.payment_method_types.join(',') : null
    })
  });

  return { fulfilled: true, email };
}

export default async (request) => {
  if (request.method !== 'POST') return json(405, { received: false, error: 'Method not allowed' });
  try {
    const stripe = new Stripe(requireEnv('STRIPE_SECRET_KEY'));
    const signature = request.headers.get('stripe-signature');
    const rawBody = await request.text();
    const event = stripe.webhooks.constructEvent(rawBody, signature, requireEnv('STRIPE_WEBHOOK_SECRET'));

    if (event.type === 'checkout.session.completed') {
      await fulfillPaidSession(event.data.object);
    }

    return json(200, { received: true });
  } catch (error) {
    console.error('stripe-webhook failed', error);
    return json(400, { received: false, error: error.message || 'Webhook error' });
  }
};
