import nodemailer from 'nodemailer';

const json = (statusCode, body) =>
  new Response(JSON.stringify(body), {
    status: statusCode,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-store'
    }
  });

function isEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value || '').trim());
}

function requireEnv(name) {
  const value = process.env[name];
  if (!value) throw new Error(`Missing environment variable: ${name}`);
  return value;
}

function money(value) {
  return `CHF ${Number(value || 0).toFixed(2)}`;
}

function buildOrderNumber(orderId) {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  const shortId = String(orderId || '').replace(/-/g, '').slice(0, 6).toUpperCase();
  return `AB-${y}${m}${day}-${shortId}`;
}

async function insertOrder(orderRow, items) {
  const supabaseUrl = requireEnv('SUPABASE_URL');
  const serviceRoleKey = requireEnv('SUPABASE_SERVICE_ROLE_KEY');

  const orderResponse = await fetch(`${supabaseUrl}/rest/v1/orders`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      apikey: serviceRoleKey,
      Authorization: `Bearer ${serviceRoleKey}`,
      Prefer: 'return=representation'
    },
    body: JSON.stringify(orderRow)
  });

  const orderData = await orderResponse.json().catch(() => null);
  if (!orderResponse.ok || !Array.isArray(orderData) || !orderData[0]) {
    throw new Error(orderData?.message || 'Failed to insert order');
  }

  const createdOrder = orderData[0];
  const orderNumber = buildOrderNumber(createdOrder.id);

  const patchResponse = await fetch(`${supabaseUrl}/rest/v1/orders?id=eq.${createdOrder.id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      apikey: serviceRoleKey,
      Authorization: `Bearer ${serviceRoleKey}`,
      Prefer: 'return=representation'
    },
    body: JSON.stringify({ order_number: orderNumber })
  });

  const patchedOrderData = await patchResponse.json().catch(() => null);
  if (!patchResponse.ok || !Array.isArray(patchedOrderData) || !patchedOrderData[0]) {
    throw new Error(patchedOrderData?.message || 'Failed to update order number');
  }

  if (items.length) {
  const itemRows = items.map(item => {
  const unitPrice = Number(item.unit_price ?? item.price ?? 0);
  const quantity = Number(item.quantity ?? 1);
  const totalPrice = Number(item.total_price ?? unitPrice * quantity);

  return {
    order_id: createdOrder.id,
    product_id: item.product_id != null ? Number(item.product_id) : null,
    slot_code: item.slot_code ?? null,
    product_name: item.product_name ?? item.name ?? 'Produkt',
    quantity,
    unit_price: unitPrice,
    total_price: totalPrice,

    // Legacy-Spalten für deine bestehende DB
    unit_price_chf: unitPrice,
    total_price_chf: totalPrice
  };
});

    const itemResponse = await fetch(`${supabaseUrl}/rest/v1/order_items`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        apikey: serviceRoleKey,
        Authorization: `Bearer ${serviceRoleKey}`,
        Prefer: 'return=minimal'
      },
      body: JSON.stringify(itemRows)
    });

    if (!itemResponse.ok) {
      const itemError = await itemResponse.json().catch(() => null);
      throw new Error(itemError?.message || 'Failed to insert order items');
    }
  }

  return patchedOrderData[0];
}

function buildCustomerMail(order) {
  const shippingLabel = order.shipping_method === 'private' ? 'Versand Privat' : 'Versand Kaserne';
  const meta = order.order_meta || {};

  const itemsHtml = order.items.map(item => `
    <tr>
      <td style="padding:6px 10px;border-bottom:1px solid #ddd">${item.product_name}</td>
      <td style="padding:6px 10px;border-bottom:1px solid #ddd">${item.quantity}</td>
      <td style="padding:6px 10px;border-bottom:1px solid #ddd">${money(item.total_price)}</td>
    </tr>
  `).join('');

  let deliveryAddressHtml = '';
  let senderHtml = '';

  if (order.shipping_method === 'private') {
    deliveryAddressHtml = `
      <p>
        <strong>Lieferadresse</strong><br>
        ${meta.privateName || ''}<br>
        ${meta.privateStreet || ''}<br>
        ${meta.privateZip || ''} ${meta.privateCity || ''}<br>
        ${meta.privateEmail ? `${meta.privateEmail}<br>` : ''}
        ${meta.privatePhone || ''}
      </p>
    `;
  } else {
    const barracksLines = Array.isArray(meta.barracksAddress) ? meta.barracksAddress.filter(Boolean) : [];
    deliveryAddressHtml = `
      <p>
        <strong>Lieferadresse Soldat</strong><br>
        ${meta.soldierFirstName || ''} ${meta.soldierLastName || ''}<br>
        ${meta.soldierKp ? `Kp: ${meta.soldierKp}` : ''}${meta.soldierKp && meta.soldierZug ? ' / ' : ''}${meta.soldierZug ? `Zug: ${meta.soldierZug}` : ''}<br>
        ${barracksLines.join('<br>')}
      </p>
    `;

    senderHtml = `
      <p>
        <strong>Absender</strong><br>
        ${meta.senderName || ''}<br>
        ${meta.senderStreet || ''}<br>
        ${meta.senderZip || ''}<br>
        ${meta.senderEmail || ''}
      </p>
    `;
  }

  return {
    subject: `ARMEEBOX Bestellbestätigung ${order.order_number}`,
    html: `
      <div style="font-family:Arial,Helvetica,sans-serif;line-height:1.5;color:#111">
        <h2>Danke für deine Bestellung bei ARMEEBOX</h2>
        <p>Deine Bestellung wurde erfolgreich gespeichert.</p>

        <p>
          <strong>Bestellnummer:</strong> ${order.order_number}<br>
          <strong>Versandart:</strong> ${shippingLabel}<br>
          <strong>Total:</strong> ${money(order.total)}
        </p>

        ${deliveryAddressHtml}
        ${senderHtml}

        ${meta.message ? `<p><strong>Nachricht an den Soldaten:</strong><br>${meta.message}</p>` : ''}

        <table style="border-collapse:collapse;width:100%;max-width:620px">
          <thead>
            <tr>
              <th align="left" style="padding:6px 10px;border-bottom:2px solid #333">Produkt</th>
              <th align="left" style="padding:6px 10px;border-bottom:2px solid #333">Menge</th>
              <th align="left" style="padding:6px 10px;border-bottom:2px solid #333">Betrag</th>
            </tr>
          </thead>
          <tbody>${itemsHtml}</tbody>
        </table>

        <p style="margin-top:16px">Diese E-Mail dient als Bestellbestätigung.</p>
      </div>
    `
  };
}

function buildAdminMail(order) {
  const meta = order.order_meta || {};
  const shippingLabel = order.shipping_method === 'private' ? 'Versand Privat' : 'Versand Kaserne';

  const lines = [
    'Neue ARMEEBOX Bestellung',
    `Bestellnummer: ${order.order_number}`,
    `Versandart: ${shippingLabel}`,
    `Total: ${money(order.total)}`,
    `Kunden E-Mail: ${order.customer_email}`,
    '',
    'Artikel:'
  ];

  for (const item of order.items) {
    lines.push(`- ${item.product_name} | Menge ${item.quantity} | ${money(item.total_price)}`);
  }

  lines.push('');

  if (order.shipping_method === 'private') {
    lines.push('Lieferadresse Privat:');
    lines.push(meta.privateName || '');
    lines.push(meta.privateStreet || '');
    lines.push(`${meta.privateZip || ''} ${meta.privateCity || ''}`.trim());
    if (meta.privateEmail) lines.push(meta.privateEmail);
    if (meta.privatePhone) lines.push(meta.privatePhone);
  } else {
    lines.push('Lieferadresse Soldat:');
    lines.push(`${meta.soldierFirstName || ''} ${meta.soldierLastName || ''}`.trim());
    lines.push(`${meta.soldierKp ? `Kp: ${meta.soldierKp}` : ''}${meta.soldierKp && meta.soldierZug ? ' / ' : ''}${meta.soldierZug ? `Zug: ${meta.soldierZug}` : ''}`);
    if (Array.isArray(meta.barracksAddress)) {
      for (const line of meta.barracksAddress) {
        if (line) lines.push(line);
      }
    }

    lines.push('');
    lines.push('Absender:');
    lines.push(meta.senderName || '');
    lines.push(meta.senderStreet || '');
    lines.push(meta.senderZip || '');
    if (meta.senderEmail) lines.push(meta.senderEmail);
  }

  if (meta.message) {
    lines.push('');
    lines.push('Nachricht an den Soldaten:');
    lines.push(meta.message);
  }

  return {
    subject: `Neue ARMEEBOX Bestellung ${order.order_number}`,
    text: lines.join('\n')
  };
}

async function sendEmails(order) {
  const smtpHost = process.env.SMTP_HOST;
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const smtpFrom = process.env.SMTP_FROM;

  if (!smtpHost || !smtpUser || !smtpPass || !smtpFrom) {
    return { customer_sent: false, admin_sent: false, skipped: true };
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: Number(process.env.SMTP_PORT || 587),
    secure: String(process.env.SMTP_SECURE || 'false') === 'true',
    auth: { user: smtpUser, pass: smtpPass }
  });

  const orderNotificationEmail = process.env.ORDER_NOTIFICATION_EMAIL || 'order@armeebox.ch';
  const customerMail = buildCustomerMail(order);
  const adminMail = buildAdminMail(order);

  const customerInfo = await transporter.sendMail({
    from: smtpFrom,
    to: order.customer_email,
    subject: customerMail.subject,
    html: customerMail.html
  });

  const adminInfo = await transporter.sendMail({
    from: smtpFrom,
    to: orderNotificationEmail,
    subject: adminMail.subject,
    text: adminMail.text
  });

  return {
    customer_sent: Boolean(customerInfo?.messageId),
    admin_sent: Boolean(adminInfo?.messageId),
    skipped: false
  };
}

export default async (request) => {
  if (request.method !== 'POST') {
    return json(405, { success: false, error: 'Method not allowed' });
  }

  try {
    const payload = await request.json().catch(() => ({}));

    if (!Array.isArray(payload.items) || payload.items.length === 0) {
      return json(400, { success: false, error: 'Cart is empty' });
    }

    if (!isEmail(payload.customer_email)) {
      return json(400, { success: false, error: 'Invalid customer email' });
    }

   const orderRow = {
  lang: payload.lang || 'de',
  status: 'submitted',
  shipping_method: payload.shipping_method,
  shipping_cost: payload.shipping_cost,
  subtotal: payload.subtotal,
  total: payload.total,
  item_count: payload.item_count,
  customer_email: payload.customer_email,
  barracks_label: payload.barracks_label,
  recipient_name: payload.recipient_name,
  order_meta: payload.order_meta || {},

  // Legacy-Felder
  language: payload.lang || 'de',
  currency: 'CHF',
  subtotal_chf: Number(payload.subtotal || 0),
  shipping_chf: Number(payload.shipping_cost || 0),
  total_chf: Number(payload.total || 0),
  order_status: 'new'
};

    const createdOrder = await insertOrder(orderRow, payload.items);

    const orderForMail = {
      ...createdOrder,
      items: payload.items,
      order_meta: payload.order_meta || {}
    };

    const emailResult = await sendEmails(orderForMail);

    return json(200, {
      success: true,
      order: {
        id: createdOrder.id,
        order_number: createdOrder.order_number,
        customer_email: createdOrder.customer_email
      },
      email: emailResult
    });
  } catch (error) {
    console.error('submit-order failed', error);
    return json(500, { success: false, error: error.message || 'Unexpected error' });
  }
};
