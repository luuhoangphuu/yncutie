const fs = require('fs');
const { execSync } = require('child_process');

console.log("🧹 Đang dọn dẹp lỗi trùng lặp...");

let intro = fs.readFileSync('src/intro.js', 'utf8');

// 1. Xóa dòng bị dính liền vào code cũ
intro = intro.replace("})();`;export const liteHead = (nonce) => '';", "})();`;");

// 2. Xóa dòng bị lặp lại
intro = intro.replace("export const liteHead = (nonce) => '';", "");

// 3. Xóa khoảng trắng thừa ở cuối file
intro = intro.trim();

// 4. Thêm lại 1 dòng duy nhất ở cuối file cho chuẩn
intro += "\n\nexport const liteHead = (nonce) => '';\n";

fs.writeFileSync('src/intro.js', intro);
console.log("✅ Đã sửa xong file src/intro.js!");

// 5. Đẩy lên Git
console.log("📤 Đang push lên Github...");
execSync('git add .', { stdio: 'inherit' });
execSync('git commit -m "Fix: Clean duplicate liteHead and mashed string"', { stdio: 'inherit' });
execSync('git push origin main', { stdio: 'inherit' });

console.log("🎉 HOÀN TẤT! Hãy đợi Cloudflare tự động build lại nhé.");
