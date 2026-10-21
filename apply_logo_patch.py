#!/usr/bin/env python3
"""Chạy tại thư mục gốc repo (chứa src/): python3 apply_logo_patch.py
- Tạo src/logo.js (logo 96px, WebP, ~4KB)
- ui.js: thay logo SVG vương miện bằng logo Zwic + đổi favicon
- index.js: thêm route /logo.webp (cache, không qua bot check) và sửa quota.remaining
Chạy lại nhiều lần vẫn an toàn."""
import re, pathlib, sys, base64, hashlib

B64 = "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"
EXPECT = 'dd6f741557af4cb220600128dfa0c1943cb58e172cd3d19eaef1162843d21048'
if hashlib.sha256(base64.b64decode(B64)).hexdigest() != EXPECT:
    print('LỖI: dữ liệu logo bị hỏng khi dán (sai mã băm). Chưa sửa file nào, hãy dán lại.'); sys.exit(1)
src = pathlib.Path('src')
if not src.is_dir():
    print('LỖI: chạy lệnh này ở thư mục gốc repo (nơi có thư mục src/).'); sys.exit(1)
ok = True

(src / 'logo.js').write_text("export const LOGO_WEBP_B64 = '" + B64 + "';\n", encoding='utf-8')
print('OK  src/logo.js')

# ---------- ui.js ----------
p = src / 'ui.js'
s = p.read_text(encoding='utf-8')
if '/logo.webp' in s:
    print('--  ui.js đã vá trước đó')
else:
    new_logo = ('const logoHtml = `<a class="logo-text" href="/" aria-label="Zwic Apex">'
                '<img src="/logo.webp" alt="" width="32" height="32" decoding="async" '
                'style="width:32px;height:32px;border-radius:50%;object-fit:cover;flex:none;display:inline-block;vertical-align:middle;margin-right:8px">'
                'Zwic Apex</a>`;')
    s2, n1 = re.subn(r'const logoHtml = `<a class="logo-text"[\s\S]*?</svg>Zwic Apex</a>`;', lambda m: new_logo, s, count=1)
    s3, n2 = re.subn(r'<link rel="icon"[^>]*>', lambda m: '<link rel="icon" type="image/webp" href="/logo.webp">', s2, count=1)
    if n1 and n2:
        p.write_text(s3, encoding='utf-8'); print('OK  ui.js (logo + favicon)')
    else:
        ok = False; print('LỖI ui.js: không tìm thấy đoạn cần thay (logo=%d, favicon=%d)' % (n1, n2))

# ---------- index.js ----------
p = src / 'index.js'
s = p.read_text(encoding='utf-8')
if 'logoRes' in s:
    print('--  index.js đã vá trước đó')
else:
    edits = [
        ("import { COOKIE_TTL, BOT_TTL, DAILY_LIMIT, TIERS, ADS_HOST_RE } from './config.js';",
         "import { COOKIE_TTL, BOT_TTL, DAILY_LIMIT, TIERS, ADS_HOST_RE } from './config.js';\nimport { LOGO_WEBP_B64 } from './logo.js';"),
        ("function secHeaders(nonce) {",
         "let LOGO_BYTES;\nconst logoRes = () => {\n  LOGO_BYTES ||= Uint8Array.from(atob(LOGO_WEBP_B64), (c) => c.charCodeAt(0));\n  return new Response(LOGO_BYTES.slice(), { headers: { 'Content-Type': 'image/webp', 'Cache-Control': 'public, max-age=86400', 'X-Content-Type-Options': 'nosniff' } });\n};\n\nfunction secHeaders(nonce) {"),
        ("    try {\n      const SECRET = getSecret(env, 'SESSION_SECRET');",
         "    if (p === '/logo.webp' && m === 'GET') return logoRes();\n\n    try {\n      const SECRET = getSecret(env, 'SESSION_SECRET');"),
        ("return { ok: count < DAILY_LIMIT, count, limit: DAILY_LIMIT };",
         "return { ok: count < DAILY_LIMIT, count, limit: DAILY_LIMIT, remaining: Math.max(0, DAILY_LIMIT - count), success: count };"),
    ]
    for old, new in edits:
        if s.count(old) != 1:
            ok = False; print('LỖI index.js: không tìm thấy đúng 1 vị trí cho: ' + old[:60]); break
        s = s.replace(old, new)
    else:
        p.write_text(s, encoding='utf-8'); print('OK  index.js (route /logo.webp + quota.remaining)')

sys.exit(0 if ok else 1)
