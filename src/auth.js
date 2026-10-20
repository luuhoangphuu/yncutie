const enc = new TextEncoder();
const dec = new TextDecoder();
const b64u = (buf) => btoa(String.fromCharCode(...new Uint8Array(buf))).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
const fromB64u = (s) => Uint8Array.from(atob(s.replace(/-/g, '+').replace(/_/g, '/')), (c) => c.charCodeAt(0));
const hmacKey = (secret, usage) => crypto.subtle.importKey('raw', enc.encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, [usage]);

export async function signToken(data, secret) {
  const body = b64u(enc.encode(JSON.stringify(data)));
  const sig = await crypto.subtle.sign('HMAC', await hmacKey(secret, 'sign'), enc.encode(body));
  return body + '.' + b64u(sig);
}

export async function verifyToken(token, secret) {
  if (!token || token.length > 2048) return null;
  const parts = token.split('.');
  if (parts.length !== 2) return null;
  try {
    const ok = await crypto.subtle.verify('HMAC', await hmacKey(secret, 'verify'), fromB64u(parts[1]), enc.encode(parts[0]));
    if (!ok) return null;
    const data = JSON.parse(dec.decode(fromB64u(parts[0])));
    if (!data.exp || Date.now() > data.exp) return null;
    return data;
  } catch { return null; }
}

export async function safeEqual(a, b) {
  const h = async (v) => new Uint8Array(await crypto.subtle.digest('SHA-256', enc.encode(String(v ?? ''))));
  const [x, y] = await Promise.all([h(a), h(b)]);
  let d = 0;
  for (let i = 0; i < x.length; i++) d |= x[i] ^ y[i];
  return d === 0;
}

export function getCookie(request, name) {
  const c = request.headers.get('cookie') || '';
  const m = c.match(new RegExp('(?:^|;\\s*)' + name + '=([^;]+)'));
  return m ? m[1] : null;
}

export function setCookie(name, value, maxAge) {
  return name + '=' + value + '; Path=/; HttpOnly; SameSite=Lax; Max-Age=' + maxAge + '; Secure';
}

export function normalizeIP(ip) {
  if (!ip) return 'local';
  if (!ip.includes(':')) return ip;
  const idx = ip.indexOf('::');
  let full;
  if (idx === -1) full = ip.split(':');
  else {
    const head = ip.slice(0, idx) ? ip.slice(0, idx).split(':') : [];
    const tail = ip.slice(idx + 2) ? ip.slice(idx + 2).split(':') : [];
    full = [...head, ...Array(Math.max(8 - head.length - tail.length, 0)).fill('0'), ...tail];
  }
  return full.slice(0, 4).map((x) => (x || '0').toLowerCase().replace(/^0+(?=.)/, '')).join(':') + '::/64';
}

export async function verifyTurnstile(token, ip, env) {
  if (!token || typeof token !== 'string') return { success: false, error: 'Thiếu mã xác minh.' };
  if (!env.TURNSTILE_SECRET_KEY) return { success: false, error: 'Máy chủ chưa cấu hình Turnstile.' };
  try {
    const r = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ secret: env.TURNSTILE_SECRET_KEY, response: token, remoteip: ip }),
      signal: AbortSignal.timeout(8000)
    });
    const d = await r.json();
    return d.success ? { success: true } : { success: false, error: 'Captcha không hợp lệ hoặc đã hết hạn. Hãy thử lại.' };
  } catch { return { success: false, error: 'Lỗi mạng khi xác minh. Hãy thử lại.' }; }
}
