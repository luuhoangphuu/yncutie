const fs = require('fs');

function read(f) { return fs.existsSync(f) ? fs.readFileSync(f, 'utf8') : ''; }
function write(f, c) { fs.writeFileSync(f, c); }
function backup(f) { if (fs.existsSync(f)) fs.copyFileSync(f, f + '.bak'); }

console.log("🚀 Đang tự động Fix UI/UX...");

// 1. Fix intro.js
let intro = read('src/intro.js');
if (intro && !intro.includes('export const liteHead')) {
    write('src/intro.js', intro + "\nexport const liteHead = (nonce) => '';\n");
    console.log("✅ Đã fix intro.js");
}

// 2. Fix ui.js
let ui = read('src/ui.js');
if (ui) {
    backup('src/ui.js');
    const oldVip = '<span><b>Key VIP</b><small>Ưu tiên, thời hạn dài hơn</small><em>VIP</em></span>';
    const newVip = '<span><b>Key VIP</b><small>Ưu tiên, thời hạn dài hơn</small></span><em class="vip-tag">VIP</em>';
    if (ui.includes(oldVip)) {
        ui = ui.replace(oldVip, newVip);
        write('src/ui.js', ui);
        console.log("✅ Đã fix ui.js (Thẻ VIP)");
    }
}

// 3. Fix assets.js
let assets = read('src/assets.js');
if (assets) {
    backup('src/assets.js');
    
    // 3.1 Nav active
    assets = assets.replace('.nav-links a.on{color:#0b0c0e;background:var(--metal)}', '.nav-links a.on{color:#fff;background:linear-gradient(180deg, rgba(255,255,255,0.15), rgba(255,255,255,0.05));border:1px solid rgba(255,255,255,0.25);box-shadow:inset 0 1px 0 rgba(255,255,255,0.4), 0 4px 12px rgba(0,0,0,0.3);text-shadow:0 0 10px rgba(255,255,255,0.3)}');
    
    // 3.2 Nút Disabled
    assets = assets.replace('.btn[aria-disabled="true"]{opacity:.45;pointer-events:none}', '.btn[aria-disabled="true"]{opacity:0.35;pointer-events:none;cursor:not-allowed;filter:grayscale(1);box-shadow:none !important;background:rgba(255,255,255,0.02) !important;border-color:rgba(255,255,255,0.05) !important;color:rgba(255,255,255,0.3) !important}');

    // 3.3 Thêm CSS VIP Tag & Glitter
    const extraCss = `\n.vip-tag { position: absolute; top: 12px; right: 12px; font-style: normal; font-size: 11px; font-weight: 800; padding: 3px 10px; border-radius: 8px; background: linear-gradient(135deg, #ffd700, #ff8c00); color: #000; box-shadow: 0 4px 12px rgba(255, 215, 0, 0.4); pointer-events: none; z-index: 2; }\n.ti::before { content: ''; position: absolute; inset: 0; pointer-events: none; z-index: 1; background-image: radial-gradient(circle at 10% 20%, rgba(255,255,255,0.7) 0, transparent 1.5px), radial-gradient(circle at 80% 60%, rgba(255,255,255,0.5) 0, transparent 2px), radial-gradient(circle at 40% 80%, rgba(255,255,255,0.6) 0, transparent 1px); background-size: 150px 150px, 200px 200px, 180px 180px; opacity: 0.4; animation: twinkleBg 4s infinite alternate; }\n@keyframes twinkleBg { 0% { opacity: 0.2; transform: scale(1); } 100% { opacity: 0.6; transform: scale(1.05); } }\n`;
    if (!assets.includes('.vip-tag')) {
        assets = assets.replace('`;\n\nexport const COMMON_JS =', '`\n' + extraCss + '\nexport const COMMON_JS =');
    }

    // 3.4 Xóa JS Glitter
    const glitterRegex = /if \(!calm\) \[\].forEach\.call\(document\.querySelectorAll\('\.keycard,\.panel,\.cp,\.admin'\),[\s\S]*?\}\);(?=\s*\/\/ Nút chính)/;
    assets = assets.replace(glitterRegex, '/* Đã xóa JS Glitter để tối ưu hiệu năng */');

    // 3.5 Tắt Tuyết Mobile
    assets = assets.replace("if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;", "if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;\n    if (window.innerWidth < 768) { c.style.display = 'none'; return; }");

    write('src/assets.js', assets);
    console.log("✅ Đã fix assets.js (CSS & JS Tối ưu)");
}

console.log("🎉 HOÀN TẤT! (File backup đuôi .bak đã được tạo an toàn)");
