const fs = require('fs');

console.log("🚀 Đang cập nhật thông tin Ứng dụng...");

if (fs.existsSync('src/ui.js')) {
    // Backup file cũ
    fs.copyFileSync('src/ui.js', 'src/ui.js.bak');
    
    let ui = fs.readFileSync('src/ui.js', 'utf8');

    // Regex tìm toàn bộ khối <div class="app-grid"> ... </section>
    const appGridRegex = /<div class="app-grid">[\s\S]*?<\/section>/;

    const newAppGrid = `<div class="app-grid" style="grid-template-columns: 1fr; max-width: 600px; margin: 0 auto;">
      <div class="app">
        <div class="app-top">
          <div class="app-icon" aria-hidden="true">ZA</div>
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

    // Thay thế
    if (appGridRegex.test(ui)) {
        ui = ui.replace(appGridRegex, newAppGrid);
        fs.writeFileSync('src/ui.js', ui);
        console.log("✅ Đã xóa App Proxy, cập nhật Zwic Apex và căn giữa giao diện!");
    } else {
        console.log("⚠️ Không tìm thấy thẻ app-grid trong ui.js. Có thể bạn đã sửa tay cấu trúc?");
    }
} else {
    console.log("❌ Không tìm thấy file src/ui.js");
}
