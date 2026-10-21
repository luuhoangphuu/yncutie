const fs = require('fs');

console.log("🖼️ Đang cập nhật Icon cho App Zwic Apex...");

if (fs.existsSync('src/ui.js')) {
    fs.copyFileSync('src/ui.js', 'src/ui.js.bak');
    let ui = fs.readFileSync('src/ui.js', 'utf8');

    // Tìm thẻ div chứa chữ "ZA" mà mình đã tạo lúc trước
    const oldIcon = /<div class="app-icon" aria-hidden="true">ZA<\/div>/;
    
    // Thay bằng thẻ img gọi thẳng file ảnh (không dùng base64)
    // Thêm CSS inline để ảnh vừa khít khung 48x48px, bo góc và có viền sáng
    const newIcon = `<div class="app-icon" aria-hidden="true" style="padding:0; overflow:hidden; background:transparent; border:1px solid rgba(255,255,255,0.2); box-shadow:0 0 15px rgba(255,255,255,0.15);">
            <img src="/logo.png" alt="Zwic Apex Logo" style="width:100%; height:100%; object-fit:cover; border-radius:inherit;">
          </div>`;

    if (oldIcon.test(ui)) {
        ui = ui.replace(oldIcon, newIcon);
        fs.writeFileSync('src/ui.js', ui);
        console.log("✅ Đã gắn Logo thật vào thẻ Tải App!");
    } else {
        console.log("⚠️ Không tìm thấy chữ 'ZA' trong ui.js. (Có thể bạn đã sửa tay?)");
    }
}
