import crypto from 'node:crypto';
import nodemailer from 'nodemailer';

const json = (statusCode, body) => new Response(JSON.stringify(body), { status: statusCode, headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' } });
function env(name){ return process.env[name] || ''; }
function requireEnv(name){ const v=env(name); if(!v) throw new Error(`Missing environment variable: ${name}`); return v; }
function parseCookies(request){
  const raw=request.headers.get('cookie') || '';
  return Object.fromEntries(raw.split(';').map(p=>p.trim()).filter(Boolean).map(p=>{ const i=p.indexOf('='); return i<0 ? [decodeURIComponent(p),''] : [decodeURIComponent(p.slice(0,i)), decodeURIComponent(p.slice(i+1))]; }));
}
function getSessionToken(){ return crypto.createHash('sha256').update(`${requireEnv('ADMIN_EMAIL')}|${requireEnv('ADMIN_PASSWORD')}|${requireEnv('ADMIN_SESSION_SECRET')}`).digest('hex'); }
function isAuthenticated(request){ return parseCookies(request).armbx_admin === getSessionToken(); }
function isEmail(v){ return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(v||'').trim()); }
function esc(v){ return String(v ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c])); }
function paragraphs(text){ return esc(text).split(/\n{2,}/).map(p=>`<p>${p.replace(/\n/g,'<br>')}</p>`).join(''); }

export default async (request) => {
  if(request.method !== 'POST') return json(405, {success:false, error:'Method not allowed'});
  try{
    if(!isAuthenticated(request)) return json(401, {success:false, error:'Nicht eingeloggt'});
    const body = await request.json().catch(()=>({}));
    const subject = String(body.subject || '').trim();
    const message = String(body.message || '').trim();
    const imageUrl = String(body.imageUrl || '').trim();
    const testOnly = Boolean(body.testOnly);
    const recipients = [...new Set((Array.isArray(body.recipients) ? body.recipients : []).map(e=>String(e||'').trim().toLowerCase()).filter(isEmail))];
    if(!subject || !message) return json(400, {success:false, error:'Betreff und Nachricht fehlen'});
    const adminEmail = env('ADMIN_EMAIL') || env('ORDER_NOTIFICATION_EMAIL') || env('SUPPORT_EMAIL') || 'support@armeebox.ch';
    const toList = testOnly ? [adminEmail] : recipients;
    if(!toList.length) return json(400, {success:false, error:'Keine gültigen Empfänger'});
    if(toList.length > 500) return json(400, {success:false, error:'Maximal 500 Empfänger pro Versand'});

    const transporter = nodemailer.createTransport({
      host: requireEnv('SMTP_HOST'),
      port: Number(env('SMTP_PORT') || 587),
      secure: String(env('SMTP_SECURE') || 'false') === 'true',
      auth: { user: requireEnv('SMTP_USER'), pass: requireEnv('SMTP_PASS') }
    });
    const from = requireEnv('SMTP_FROM');
    const html = `
      <div style="font-family:Arial,Helvetica,sans-serif;line-height:1.5;color:#111;max-width:680px;margin:0 auto">
        <h2 style="margin:0 0 16px">${esc(subject)}</h2>
        ${imageUrl ? `<p><img src="${esc(imageUrl)}" alt="" style="max-width:100%;height:auto;border-radius:10px"></p>` : ''}
        ${paragraphs(message)}
        <hr style="border:none;border-top:1px solid #ddd;margin:24px 0">
        <p style="font-size:12px;color:#666">ARMEEBOX Newsletter</p>
      </div>`;
    const mail = testOnly ? {
      from, to: adminEmail, subject: `[TEST] ${subject}`, html, text: message
    } : {
      from, to: from, bcc: toList.join(','), subject, html, text: message
    };
    const info = await transporter.sendMail(mail);
    return json(200, {success:true, sent: toList.length, messageId: info?.messageId || null, testOnly});
  }catch(error){
    console.error('newsletter-send failed', error);
    return json(500, {success:false, error:error.message || 'Newsletter Versand fehlgeschlagen'});
  }
};
