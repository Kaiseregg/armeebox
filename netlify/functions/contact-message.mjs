import nodemailer from 'nodemailer';

const json = (statusCode, body) => new Response(JSON.stringify(body), { status: statusCode, headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' } });
function env(name){ return process.env[name] || ''; }
function isEmail(v){ return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(v||'').trim()); }
function authHeaders(){ const key=env('SUPABASE_SERVICE_ROLE_KEY'); return { apikey:key, Authorization:`Bearer ${key}`, 'Content-Type':'application/json' }; }
async function supa(path, options={}){
  const base=env('SUPABASE_URL'); if(!base || !env('SUPABASE_SERVICE_ROLE_KEY')) return null;
  const res=await fetch(`${base}/rest/v1/${path}`, { ...options, headers:{...authHeaders(), ...(options.headers||{})} });
  const data=await res.json().catch(()=>null);
  if(!res.ok) throw new Error(data?.message || data?.error || `Supabase ${res.status}`);
  return data;
}
async function sendMail(payload){
  if(!env('SMTP_HOST') || !env('SMTP_USER') || !env('SMTP_PASS') || !env('SMTP_FROM')) return false;
  const transporter = nodemailer.createTransport({ host: env('SMTP_HOST'), port: Number(env('SMTP_PORT') || 587), secure: String(env('SMTP_SECURE') || 'false') === 'true', auth:{ user: env('SMTP_USER'), pass: env('SMTP_PASS') } });
  const to = env('SUPPORT_EMAIL') || 'support@armeebox.ch';
  const info = await transporter.sendMail({
    from: env('SMTP_FROM'),
    to,
    replyTo: payload.email,
    subject: `ARMEEBOX Kontakt: ${payload.subject || 'Neue Nachricht'}`,
    text: [`Neue Kontaktanfrage`, `Name: ${payload.name || '-'}`, `E-Mail: ${payload.email}`, `Betreff: ${payload.subject || '-'}`, '', payload.message].join('\n')
  });
  return Boolean(info?.messageId);
}
export default async (request) => {
  if(request.method !== 'POST') return json(405, {success:false, error:'Method not allowed'});
  try{
    const body=await request.json().catch(()=>({}));
    const payload={ name:String(body.name||'').trim(), email:String(body.email||'').trim(), subject:String(body.subject||'').trim(), message:String(body.message||'').trim(), lang:String(body.lang||'de').slice(0,2) };
    if(!isEmail(payload.email) || !payload.message) return json(400, {success:false, error:'Bitte E-Mail und Nachricht prüfen.'});
    let stored=false;
    try{
      await supa('contact_messages', {method:'POST', headers:{Prefer:'return=minimal'}, body:JSON.stringify(payload)});
      stored=true;
    }catch(e){ console.warn('contact_messages insert failed', e.message); }
    const mailed = await sendMail(payload);
    return json(200, {success:true, stored, mailed});
  }catch(error){
    console.error('contact-message failed', error);
    return json(500, {success:false, error:error.message || 'Unexpected error'});
  }
};
