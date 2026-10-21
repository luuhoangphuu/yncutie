const fs = require('fs');

if (fs.existsSync('src/ui.js')) {
    fs.copyFileSync('src/ui.js', 'src/ui.js.bak');
    let ui = fs.readFileSync('src/ui.js', 'utf8');

    // Đoạn code cũ chính xác (từ App Proxy đến hết App External)
    // Mình dùng thuật toán cắt chuỗi dựa trên các mốc cố định để không phụ thuộc Regex
    const startMarker = '<section class="apps">';
    const endMarker = '</section>';

    const startIndex = ui.indexOf(startMarker);
    const endIndex = ui.indexOf(endMarker, startIndex);

    if (startIndex !== -1 && endIndex !== -1) {
        // Cắt lấy đoạn đầu và đoạn đuôi
        const before = ui.substring(0, startIndex);
        const after = ui.substring(endIndex + endMarker.length);

        // Tạo đoạn code mới (Chỉ 1 App, có Logo, đúng Link và Text)
        const newAppSection = `<section class="apps">
    <h3 class="sec-title">Tải ứng dụng</h3>
    <div class="app-grid" style="grid-template-columns: 1fr; max-width: 600px; margin: 0 auto;">
      <div class="app">
        <div class="app-top">
          <div class="app-icon" aria-hidden="true" style="padding:0; overflow:hidden; background:transparent; border:1px solid rgba(255,255,255,0.2); box-shadow:0 0 15px rgba(255,255,255,0.15);">
            <img src="/logo.png" alt="Zwic Apex Logo" style="width:100%; height:100%; object-fit:cover; border-radius:inherit;">
          </div>
          <div><h3 style="font-size:16px">Zwic Apex</h3><p class="app-warning">Fix Lag & Tối ưu</p></div>
        </div>
        <ul class="app-list">
          <li>– Fix Lag, Khóa FPS, HZ,...</li>
          <li>– Nhẹ Tâm, Bám Đầu, Fix Rung,...</li>
          <li>– Tối ưu máy, all adr, FFTH và FFMAX.</li>
        </ul>
        <a href="https://www.mediafire.com/file/bimuah51pzdpms3/Zwic_Apex_v3.1.apk/file" class="btn btn-download" style="margin-top:auto" target="_blank" rel="noopener noreferrer">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg> Tải xuống
        </a>
      </div>
    </div>
  </section>`;

        // Ghép lại
        const finalUi = before + newAppSection + after;
        fs.writeFileSync('src/ui.js', finalUi);
        console.log("✅ Đã thay thế thành công toàn bộ khu vực Tải ứng dụng!");
    } else {
        console.log("❌ Không tìm thấy thẻ <section class='apps'> trong ui.js. Bạn thử mở file ra check lại xem có bị sửa tay không nhé.");
    }
}
