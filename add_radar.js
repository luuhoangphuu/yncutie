const fs = require('fs');

console.log("🚀 Đang thêm quả cầu Radar 3D vào giao diện...");

// 1. Nhúng CSS vào src/assets.js
let css = fs.readFileSync('src/assets.js', 'utf8');
const radarCss = `
/* ============ 3D RADAR ============ */
.radar-wrap {
  display: flex; align-items: center; justify-content: space-between;
  background: var(--field); border: 1px solid var(--border);
  border-radius: 14px; padding: 14px 16px; margin-bottom: 16px;
  box-shadow: inset 0 2px 6px rgba(0,0,0,.35);
}
.radar-text { display: flex; flex-direction: column; gap: 4px; }
.radar-text b { font-size: 14px; color: var(--text); font-weight: 700; letter-spacing: -.01em;}
.radar-text small { font-size: 12px; color: var(--ok); font-weight: 600; }
.dial {
  position: relative; width: 64px; height: 64px; border-radius: 50%;
  overflow: hidden;
  background:
    radial-gradient(circle, transparent 31%, rgba(255,255,255,.15) 32%, transparent 33.5%, transparent 64%, rgba(255,255,255,.15) 65%, transparent 66.5%),
    linear-gradient(rgba(255,255,255,.08), rgba(255,255,255,.08)) center / 1px 100% no-repeat,
    linear-gradient(rgba(255,255,255,.08), rgba(255,255,255,.08)) center / 100% 1px no-repeat,
    radial-gradient(circle, rgba(255, 255, 255, 0.05), rgba(0, 0, 0, 0.4) 72%);
  box-shadow: 0 0 0 1px rgba(255,255,255,.15), 0 0 20px -4px rgba(134,216,170,0.45);
}
.sweep {
  position: absolute; inset: 0; border-radius: 50%;
  background: conic-gradient(from 0deg, rgba(134,216,170,.6), rgba(134,216,170,0) 28%);
  animation: radar-spin 3.6s linear infinite;
}
.blip {
  position: absolute; width: 4px; height: 4px; margin: -2px 0 0 -2px; border-radius: 50%;
  background: var(--ok); box-shadow: 0 0 8px 1px rgba(134,216,170,.8);
  opacity: 0; animation: radar-blip 3.6s linear infinite;
}
.blip.one { top: 30%; left: 64%; animation-delay: 0.45s; }
.blip.two { top: 70%; left: 72%; animation-delay: 1.35s; }
.blip.three { top: 62%; left: 26%; animation-delay: 2.4s; }
.blip.four { top: 24%; left: 34%; animation-delay: 3.1s; }
@keyframes radar-spin { to { transform: rotate(360deg); } }
@keyframes radar-blip { 0%, 10% { opacity: 0; transform: scale(0.4); } 14% { opacity: 1; transform: scale(1); } 46% { opacity: 0; } 100% { opacity: 0; } }
`;

if (!css.includes('.radar-wrap')) {
  css = css.replace('/* ============ CHECK BOT ============ */', radarCss + '\n/* ============ CHECK BOT ============ */');
  fs.writeFileSync('src/assets.js', css);
  console.log("✅ Đã thêm CSS Radar vào src/assets.js");
}

// 2. Nhúng HTML vào src/ui.js
let ui = fs.readFileSync('src/ui.js', 'utf8');
const radarHtml = `
      <div class="radar-wrap">
        <div class="radar-text">
          <b>Quét lưu lượng</b>
          <small>WAF · Chống Bot · DDoS</small>
        </div>
        <div class="dial" aria-hidden="true">
          <span class="sweep"></span>
          <i class="blip one"></i><i class="blip two"></i><i class="blip three"></i><i class="blip four"></i>
        </div>
      </div>
      <div class="con-metrics">`;

if (!ui.includes('radar-wrap')) {
  ui = ui.replace('<div class="con-metrics">', radarHtml);
  fs.writeFileSync('src/ui.js', ui);
  console.log("✅ Đã gắn Radar vào panel Giám sát bảo mật trong src/ui.js");
}
