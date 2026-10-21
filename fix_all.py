import os, re, shutil

def backup_and_read(filepath):
    if os.path.exists(filepath):
        shutil.copy(filepath, filepath + '.bak')
        with open(filepath, 'r', encoding='utf-8') as f:
            return f.read()
    return ""

def write(filepath, content):
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

print("🚀 Bắt đầu quá trình tự động Fix UI/UX...")

# ==========================================
# 1. FIX src/intro.js (Thêm liteHead)
# ==========================================
intro_path = 'src/intro.js'
intro_code = backup_and_read(intro_path)
if intro_code:
    if 'export const liteHead' not in intro_code:
        intro_code += "\nexport const liteHead = (nonce) => '';\n"
        write(intro_path, intro_code)
        print("✅ Đã fix src/intro.js: Thêm export liteHead.")
    else:
        print("ℹ️ src/intro.js đã có liteHead, bỏ qua.")

# ==========================================
# 2. FIX src/ui.js (Sửa Badge VIP)
# ==========================================
ui_path = 'src/ui.js'
ui_code = backup_and_read(ui_path)
if ui_code:
    old_vip = '''<label class="radio-label"><input type="radio" name="tier" value="VIP"><span><b>Key VIP</b><small>Ưu tiên, thời hạn dài hơn</small><em>VIP</em></span></label>'''
    new_vip = '''<label class="radio-label"><input type="radio" name="tier" value="VIP"><span><b>Key VIP</b><small>Ưu tiên, thời hạn dài hơn</small></span><em class="vip-tag">VIP</em></label>'''
    
    if old_vip in ui_code:
        ui_code = ui_code.replace(old_vip, new_vip)
        write(ui_path, ui_code)
        print("✅ Đã fix src/ui.js: Cấu trúc lại thẻ Key VIP.")
    else:
        print("⚠️ Không tìm thấy đoạn mã VIP cũ trong src/ui.js (có thể đã sửa tay).")

# ==========================================
# 3. FIX src/assets.js (CSS & JS Tối ưu)
# ==========================================
assets_path = 'src/assets.js'
assets_code = backup_and_read(assets_path)
if assets_code:
    # 3.1. CSS Nút Nav Active
    old_nav = '''.nav-links a.on{color:#0b0c0e;background:var(--metal)}'''
    new_nav = '''.nav-links a.on{color:#fff;background:linear-gradient(180deg, rgba(255,255,255,0.15), rgba(255,255,255,0.05));border:1px solid rgba(255,255,255,0.25);box-shadow:inset 0 1px 0 rgba(255,255,255,0.4), 0 4px 12px rgba(0,0,0,0.3);text-shadow:0 0 10px rgba(255,255,255,0.3)}'''
    assets_code = assets_code.replace(old_nav, new_nav)

    # 3.2. CSS Nút Disabled
    old_btn = '''.btn[aria-disabled="true"]{opacity:.45;pointer-events:none}'''
    new_btn = '''.btn[aria-disabled="true"]{opacity:0.35;pointer-events:none;cursor:not-allowed;filter:grayscale(1);box-shadow:none !important;background:rgba(255,255,255,0.02) !important;border-color:rgba(255,255,255,0.05) !important;color:rgba(255,255,255,0.3) !important}'''
    assets_code = assets_code.replace(old_btn, new_btn)

    # 3.3. Chèn CSS VIP Tag + Glitter (Trước COMMON_JS)
    extra_css = """
/* Thêm bởi Auto-Fix Script */
.vip-tag { position: absolute; top: 12px; right: 12px; font-style: normal; font-size: 11px; font-weight: 800; padding: 3px 10px; border-radius: 8px; background: linear-gradient(135deg, #ffd700, #ff8c00); color: #000; box-shadow: 0 4px 12px rgba(255, 215, 0, 0.4); pointer-events: none; z-index: 2; }
.ti::before { content: ''; position: absolute; inset: 0; pointer-events: none; z-index: 1; background-image: radial-gradient(circle at 10% 20%, rgba(255,255,255,0.7) 0, transparent 1.5px), radial-gradient(circle at 80% 60%, rgba(255,255,255,0.5) 0, transparent 2px), radial-gradient(circle at 40% 80%, rgba(255,255,255,0.6) 0, transparent 1px); background-size: 150px 150px, 200px 200px, 180px 180px; opacity: 0.4; animation: twinkleBg 4s infinite alternate; }
@keyframes twinkleBg { 0% { opacity: 0.2; transform: scale(1); } 100% { opacity: 0.6; transform: scale(1.05); } }
`;
    if '.vip-tag' not in assets_code:
        assets_code = assets_code.replace('`;\n\nexport const COMMON_JS =', '`\n' + extra_css + '\nexport const COMMON_JS =')

    # 3.4. Xóa JS Glitter (Tối ưu hiệu năng)
    js_glitter_pattern = r"if \(!calm\) \[\].forEach\.call\(document\.querySelectorAll\('\.keycard,\.panel,\.cp,\.admin'\), function\(el\) \{.*?\n    \}\);"
    assets_code = re.sub(js_glitter_pattern, "/* Đã xóa JS Glitter để tối ưu hiệu năng */", assets_code, flags=re.DOTALL)

    # 3.5. Tắt Tuyết trên Mobile
    old_snow = '''if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;'''
    new_snow = '''if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;\n    if (window.innerWidth < 768) { c.style.display = 'none'; return; }'''
    assets_code = assets_code.replace(old_snow, new_snow)

    write(assets_path, assets_code)
    print("✅ Đã fix src/assets.js: Cập nhật CSS và tối ưu JS.")
else:
    print("❌ Không tìm thấy src/assets.js")

print("🎉 HOÀN TẤT! Bản backup được lưu ở các file .bak")
