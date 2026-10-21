const fs = require('fs');
const { execSync } = require('child_process');

console.log("🛠️ Bắt đầu sửa lỗi Build và Logo...");

// 1. Vá lỗi liteHead trong intro.js
let intro = fs.readFileSync('src/intro.js', 'utf8');
if (!intro.includes('export const liteHead')) {
  intro += "\nexport const liteHead = (nonce) => '';\n";
  fs.writeFileSync('src/intro.js', intro);
  console.log("✅ Đã thêm liteHead vào intro.js");
} else {
  console.log("✅ intro.js đã có liteHead");
}

// 2. Nhúng Base64 Logo vào ui.js
let ui = fs.readFileSync('src/ui.js', 'utf8');
if (!ui.includes('LOGO_WEBP_B64')) {
  ui = ui.replace(
    "import { INTRO_CSS, INTRO_JS, introHead, introHtml, liteHead } from './intro.js';",
    "import { INTRO_CSS, INTRO_JS, introHead, introHtml, liteHead } from './intro.js';\nimport { LOGO_WEBP_B64 } from './logo.js';"
  );
}

// Thay thế thẻ img App (logo.png) bằng Base64
ui = ui.replace(/<img src="\/logo\.png"[^>]*>/g, '<img src="${LOGO_WEBP_B64}" alt="Zwic Apex Logo" style="width:100%; height:100%; object-fit:cover; border-radius:inherit;">');
// Thay thế thẻ img Header (logo.webp) bằng Base64
ui = ui.replace(/<img src="\/logo\.webp"[^>]*>/g, '<img src="${LOGO_WEBP_B64}" alt="Zwic Apex" style="width:32px;height:32px;border-radius:50%;object-fit:cover;margin-right:8px;vertical-align:middle">');

fs.writeFileSync('src/ui.js', ui);
console.log("✅ Đã nhúng Base64 Logo vào ui.js");

// 3. Push lên Github
console.log("📤 Đang đẩy code lên Github...");
try {
  execSync('git add .', { stdio: 'inherit' });
  execSync('git commit -m "Fix: Build error liteHead and Add Base64 Logo"', { stdio: 'inherit' });
  execSync('git push origin main', { stdio: 'inherit' });
  console.log("🎉 HOÀN TẤT! Code đã lên Github. Hãy đợi 1-2 phút để Cloudflare tự động Build lại.");
} catch (e) {
  console.error("❌ Lỗi Git. Có thể bạn chưa cấu hình user.name / user.email. Hãy chạy lệnh git config như hướng dẫn trước.");
}
