export function safeBtoa(str) { return btoa(unescape(encodeURIComponent(str))).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, ''); }
export function safeAtob(str) { return decodeURIComponent(escape(atob(str.replace(/-/g, '+').replace(/_/g, '/')))); }
export async function hmac(data, secret, action) {
  const enc = new TextEncoder(); const key = await crypto.subtle.importKey('raw', enc.encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, [action]);
  if (action === 'sign') { const sig = await crypto.subtle.sign('HMAC', key, enc.encode(data)); return btoa(String.fromCharCode(...new Uint8Array(sig))).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, ''); }
  return key;
}
export async function encodeSession(data, secret) { return safeBtoa(JSON.stringify(data)) + '.' + await hmac(safeBtoa(JSON.stringify(data)), secret, 'sign'); }
export async function decodeSession(token, secret) {
  if (!token || token.length > 4096) return null; const parts = token.split('.'); if (parts.length !== 2) return null;
  try {
    const enc = new TextEncoder(); const key = await hmac('', secret, 'import');
    const sigBytes = Uint8Array.from(atob(parts[1].replace(/-/g, '+').replace(/_/g, '/')), c => c.charCodeAt(0));
    const ok = await crypto.subtle.verify('HMAC', key, sigBytes, enc.encode(parts[0])); if (!ok) return null;
    const data = JSON.parse(safeAtob(parts[0])); if (Date.now() > data.expiresAt) return null; return data;
  } catch { return null; }
}
export function getCookie(request, name) { const c = request.headers.get('cookie') || ''; const m = c.match(new RegExp('(?:^|;\\s*)' + name + '=([^;]+)')); return m ? m[1] : null; }
export function setCookie(name, value, maxAge) { return `${name}=${value}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${maxAge}; Secure`; }
export async function verifyTurnstile(token, ip, env) {
  if (!token) return { success: false, error: "Missing token" };
  try {
    const r = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ secret: env.TURNSTILE_SECRET_KEY, response: token, remoteip: ip }) });
    const d = await r.json();
    if (!d.success) return { success: false, error: d['error-codes'].includes('missing-input-secret') ? "LỖI: Thiếu Secret Key trên Cloudflare." : "Captcha không hợp lệ." };
    return { success: true };
  } catch { return { success: false, error: "Lỗi mạng." }; }
}
