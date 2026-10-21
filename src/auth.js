const enc = new TextEncoder();
const dec = new TextDecoder();

const b64u = (buf) => {
  const u = new Uint8Array(buf);
  let s = '';
  for (let i = 0; i < u.length; i++) s += String.fromCharCode(u[i]);
  return btoa(s).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
};
const fromB64u = (s) => {
  s = s.replace(/-/g, '+').replace(/_/g, '/');
  while (s.length % 4) s += '=';
  return Uint8Array.from(atob(s), (c) => c.charCodeAt(0));
};
const hmacKey = (secret, usage) => crypto.subtle.importKey('raw', enc.encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, [usage]);

// Ký token. Luôn thêm trường `typ` ở nơi gọi để cookie loại này không dùng nhầm cho loại kia.
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
    if (!data || !data.exp || Date.now() > data.exp) return null;
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
  const esc = name.replace(/[-.*+?^${}()|[\]\\]/g, '\\$&');
  const m = c.match(new RegExp('(?:^|;\\s*)' + esc + '=([^;]+)'));
  return m ? m[1] : null;
}

// Tên cookie có tiền tố __Host- (trình duyệt ép Secure + Path=/ + không Domain)
export function setCookie(name, value, maxAge) {
  return name + '=' + value + '; Path=/; HttpOnly; SameSite=Lax; Max-Age=' + maxAge + '; Secure';
}

export function normalizeIP(ip) {
  if (!ip) return 'local';
  const v4 = ip.match(/^::ffff:(\d+\.\d+\.\d+\.\d+)$/i);
  if (v4) return v4[1];
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

// Xác thực Turnstile, có kiểm tra hostname
export async function verifyTurnstile(token, ip, env, hostname) {
  if (!token || typeof token !== 'string' || token.length > 2048) return { success: false, error: 'Thiếu mã xác minh.' };
  if (!env.TURNSTILE_SECRET_KEY) return { success: false, error: 'Máy chủ chưa cấu hình Turnstile.' };
  try {
    const r = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ secret: env.TURNSTILE_SECRET_KEY, response: token, remoteip: ip }),
      signal: AbortSignal.timeout(8000)
    });
    const d = await r.json();
    if (!d.success) return { success: false, error: 'Captcha không hợp lệ hoặc đã hết hạn.' };
    if (hostname && d.hostname && d.hostname !== hostname) return { success: false, error: 'Captcha không hợp lệ.' };
    return { success: true };
  } catch { return { success: false, error: 'Lỗi mạng khi xác minh Captcha.' }; }
}
