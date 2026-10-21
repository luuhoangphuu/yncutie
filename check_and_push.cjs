const fs = require('fs');
const { execSync } = require('child_process');

console.log("🔍 Bắt đầu kiểm tra toàn bộ file...");

// 1. Kiểm tra syntax các file (nếu lỗi sẽ báo ngay)
const files = ['src/ui.js', 'src/intro.js', 'src/assets.js', 'src/logo.js'];
files.forEach(f => {
  try {
    execSync(`node --check ${f}`);
    console.log(`✅ ${f} - Syntax OK`);
  } catch (e) {
    console.error(`❌ ${f} - Syntax ERROR! Hãy kiểm tra lại file này.`);
    process.exit(1);
  }
});

// 2. Kiểm tra export/import
const intro = fs.readFileSync('src/intro.js', 'utf8');
const requiredExports = ['INTRO_CSS', 'INTRO_JS', 'introHead', 'introHtml', 'liteHead'];
requiredExports.forEach(exp => {
  if (!intro.includes(`export const ${exp}`)) {
    console.error(`❌ Thiếu export ${exp} trong src/intro.js`);
    process.exit(1);
  }
});

const logo = fs.readFileSync('src/logo.js', 'utf8');
if (!logo.includes('LOGO_WEBP_B64')) {
  console.error('❌ Thiếu biến LOGO_WEBP_B64 trong src/logo.js');
  process.exit(1);
}

console.log("✅ Các file export/import đầy đủ.");

// 3. Tự động sửa lỗi ảnh Logo (dùng Base64)
let ui = fs.readFileSync('src/ui.js', 'utf8');
if (!ui.includes("import { LOGO_WEBP_B64 }")) {
  ui = ui.replace(
    "import { INTRO_CSS, INTRO_JS, introHead, introHtml, liteHead } from './intro.js';",
    "import { INTRO_CSS, INTRO_JS, introHead, introHtml, liteHead } from './intro.js';\nimport { LOGO_WEBP_B64 } from './logo.js';"
  );
}

// Thay thế thẻ img bằng base64 (xử lý cả logo.png và logo.webp)
ui = ui.replace(/<img src="\/logo\.(png|webp)"[^>]*>/g, (match) => {
  // Xác định xem đây là ảnh header (32x32) hay ảnh app (100%)
  if (match.includes('width="32"') || match.includes('margin-right:8px')) {
    return '<img src="${LOGO_WEBP_B64}" alt="Zwic Apex" style="width:32px;height:32px;border-radius:50%;object-fit:cover;margin-right:8px;vertical-align:middle">';
  } else {
    return '<img src="${LOGO_WEBP_B64}" alt="Zwic Apex Logo" style="width:100%; height:100%; object-fit:cover; border-radius:inherit;">';
  }
});

fs.writeFileSync('src/ui.js', ui);
console.log("✅ Đã tự động nhúng Base64 cho toàn bộ Logo.");

// 4. Chạy Deploy (nếu muốn kiểm tra trước khi push)
try {
  console.log("🚀 Đang chạy Deploy lên Cloudflare...");
  execSync('npm run deploy', { stdio: 'inherit' });
} catch (e) {
  console.error("❌ Deploy thất bại. Vui lòng kiểm tra lỗi phía trên.");
  process.exit(1);
}

// 5. Git push
console.log("📤 Đang đẩy code lên GitHub...");
execSync('git add .', { stdio: 'inherit' });
execSync('git commit -m "Auto: Fix logo base64, kiem tra syntax va push"', { stdio: 'inherit' });
execSync('git push origin main', { stdio: 'inherit' });

console.log("🎉 HOÀN TẤT! Mọi thứ đã được fix và push lên Git.");
