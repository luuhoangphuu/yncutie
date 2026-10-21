// ============================================================
//  intro.js  -  Màn mở đầu "điện ảnh" + tinh chỉnh UX mobile
//  Dùng: xem hướng dẫn gắn vào views.js (5 chỗ sửa nhỏ)
//  Toàn bộ class dùng tiền tố "zi-" nên KHÔNG đụng CSS .intro cũ
// ============================================================

export const INTRO_CSS = `
/* ===== MÀN MỞ ĐẦU ===== */
html.intro-on,html.intro-on body{overflow:hidden}
.zi{display:none;position:fixed;inset:0;height:100vh;height:100dvh;z-index:200000;overflow:hidden;touch-action:none;-webkit-user-select:none;user-select:none}
html.intro-on .zi{display:block;animation:ziKill .01s linear 3.8s forwards}
@keyframes ziKill{to{opacity:0;visibility:hidden;pointer-events:none}}

/* 2 cánh màn che: nửa trên + nửa dưới, mở ra như khe sáng */
.zi-p{position:absolute;left:0;right:0;height:50.6%;z-index:1;background:#07080a;will-change:transform}
.zi-t{top:0}.zi-b{bottom:0}

.zi-bg{position:absolute;inset:0;z-index:2;pointer-events:none;
  background:radial-gradient(520px 360px at 50% 44%,rgba(205,212,224,.17),transparent 70%),radial-gradient(900px 600px at 50% 110%,rgba(140,150,165,.1),transparent 70%);
  animation:ziBreath 3.2s ease-in-out infinite}
.zi-bg::before{content:'';position:absolute;left:50%;top:44%;width:150vmax;height:150vmax;margin:-75vmax 0 0 -75vmax;
  background:conic-gradient(from 0deg,transparent 0,rgba(255,255,255,.06) 7deg,transparent 15deg,transparent 180deg,rgba(255,255,255,.045) 187deg,transparent 196deg);
  -webkit-mask-image:radial-gradient(circle,#000 0,transparent 55%);mask-image:radial-gradient(circle,#000 0,transparent 55%);
  animation:ziRot 10s linear infinite;will-change:transform}
@keyframes ziBreath{50%{opacity:.72}}
@keyframes ziRot{to{transform:rotate(360deg)}}

.zi-core{position:absolute;inset:0;z-index:3;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;padding:0 24px 7vh;will-change:transform,opacity}

/* logo: vương miện được vẽ nét + vòng sáng xoay */
.zi-logo{position:relative;width:96px;height:96px;display:grid;place-items:center}
.zi-logo::before{content:'';position:absolute;inset:0;border-radius:50%;box-shadow:inset 0 0 0 1px rgba(255,255,255,.1);background:radial-gradient(circle,rgba(255,255,255,.09),transparent 68%)}
.zi-ring{position:absolute;inset:0;border-radius:50%;
  background:conic-gradient(from 0deg,transparent 0 55%,rgba(255,255,255,.95) 100%);
  -webkit-mask:radial-gradient(farthest-side,transparent calc(100% - 1.6px),#000 calc(100% - 1.5px));
  mask:radial-gradient(farthest-side,transparent calc(100% - 1.6px),#000 calc(100% - 1.5px));
  animation:ziRot 1.3s linear infinite}
.zi-crown{position:relative;width:46px;height:46px;fill:rgba(230,233,238,0);stroke:#e6e9ee;stroke-width:1.1;stroke-linejoin:round;stroke-dasharray:130;stroke-dashoffset:130;
  animation:ziDraw 1.2s var(--ease) .15s forwards,ziFill .7s ease 1.05s forwards;filter:drop-shadow(0 0 10px rgba(255,255,255,.35))}
@keyframes ziDraw{to{stroke-dashoffset:0}}
@keyframes ziFill{to{fill:rgba(230,233,238,.96)}}

/* tên: từng chữ trồi lên, nét dần */
.zi-word{display:flex;justify-content:center;font-size:clamp(34px,10.5vw,54px);font-weight:800;line-height:1.05;letter-spacing:-.04em}
.zi-l{display:inline-block;opacity:0;transform:translateY(55%) scale(.88);filter:blur(10px);
  background:var(--metal-text);-webkit-background-clip:text;background-clip:text;color:transparent;padding:0 .01em;
  animation:ziLetter .85s var(--ease) calc(.5s + var(--i) * .055s) forwards}
.zi-sp{display:inline-block;width:.32em}
@keyframes ziLetter{to{opacity:1;transform:none;filter:blur(0)}}

.zi-line{display:block;width:min(170px,42vw);height:1px;background:linear-gradient(90deg,transparent,#fff,transparent);transform:scaleX(0);animation:ziLine 1s var(--ease) .95s forwards}
@keyframes ziLine{to{transform:scaleX(1)}}
.zi-tag{font-size:12px;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:var(--dim);opacity:0;transform:translateY(8px);text-align:center;animation:ziUp .8s var(--ease) 1.15s forwards}
@keyframes ziUp{to{opacity:1;transform:none}}

/* đếm % + thanh nạp */
.zi-prog{position:absolute;z-index:3;left:50%;transform:translateX(-50%);bottom:max(48px,calc(env(safe-area-inset-bottom) + 30px));width:min(220px,60vw);text-align:center;font-family:'JetBrains Mono',ui-monospace,monospace;color:var(--silver);opacity:0;animation:ziUp .6s ease .35s forwards}
.zi-prog b{font-size:15px;font-weight:700;font-variant-numeric:tabular-nums}
.zi-prog em{font-style:normal;font-size:12px;color:var(--dim);margin-left:2px}
.zi-prog span{display:block;height:2px;margin-top:10px;border-radius:2px;background:rgba(255,255,255,.12);overflow:hidden}
.zi-prog u{display:block;height:100%;background:var(--metal);box-shadow:0 0 10px rgba(255,255,255,.6);transform-origin:left;transform:scaleX(var(--p,0));text-decoration:none}

/* khe sáng giữa 2 cánh */
.zi-seam{position:absolute;z-index:4;left:0;right:0;top:calc(50% - 1px);height:2px;pointer-events:none;background:linear-gradient(90deg,transparent,#fff 30%,#fff 70%,transparent);box-shadow:0 0 24px 4px rgba(255,255,255,.55);transform:scaleX(0);opacity:0}

/* ===== LÚC THOÁT ===== */
html.intro-out .zi{pointer-events:none}
html.intro-out .zi-core{animation:ziCoreOut .55s cubic-bezier(.4,0,1,1) forwards}
html.intro-out .zi-bg,html.intro-out .zi-prog{animation:ziFade .5s ease forwards}
html.intro-out .zi-seam{animation:ziSeam .95s var(--ease) forwards}
html.intro-out .zi-t{animation:ziPT .95s cubic-bezier(.77,0,.18,1) .32s forwards}
html.intro-out .zi-b{animation:ziPB .95s cubic-bezier(.77,0,.18,1) .32s forwards}
@keyframes ziCoreOut{to{opacity:0;transform:scale(1.1)}}
@keyframes ziFade{to{opacity:0}}
@keyframes ziSeam{0%{transform:scaleX(0);opacity:1}38%{transform:scaleX(1);opacity:1}100%{transform:scaleX(1);opacity:0}}
@keyframes ziPT{to{transform:translate3d(0,-101%,0)}}
@keyframes ziPB{to{transform:translate3d(0,101%,0)}}

/* ===== CHẾ ĐỘ "GIẢM CHUYỂN ĐỘNG" (nhiều máy Android bật sẵn): chỉ mờ dần nhẹ, vẫn hiện logo ===== */
html.intro-calm .zi{background:#07080a;transition:opacity .5s ease!important}
html.intro-calm .zi-p,html.intro-calm .zi-seam,html.intro-calm .zi-ring,html.intro-calm .zi-bg::before{display:none}
html.intro-calm.intro-out .zi{opacity:0}
html.intro-calm.intro-out .zi-core,html.intro-calm.intro-out .zi-bg,html.intro-calm.intro-out .zi-prog{animation:none!important}
html.intro-calm .zi-crown{stroke-dashoffset:0;fill:rgba(230,233,238,.96)}

/* ===== UX MOBILE: phản hồi chạm, thanh tiến trình cuộn ===== */
body{touch-action:manipulation}
.radio-label>span{transition:border-color .2s,background .2s,color .2s,transform .18s var(--ease)}
.scroll-prog{position:fixed;top:0;left:0;right:0;height:2px;z-index:101;pointer-events:none;transform-origin:left;transform:scaleX(var(--sp,0));background:var(--metal);box-shadow:0 0 10px rgba(255,255,255,.5)}
@media(hover:none),(pointer:coarse){
  .radio-label:active>span{transform:scale(.975)}
  .btn:active{transform:scale(.97)}
  .sup:active,.app:active,.keybox:active{transform:scale(.985)}
  .sup,.app{transition:transform .2s var(--ease)}
}
@media(max-width:600px){
  .zi-logo{width:88px;height:88px}
  .zi-crown{width:42px;height:42px}
  .zi-tag{font-size:11px;letter-spacing:.14em}
}
`;

// Chạy trong <head> (trước khi body vẽ) để không bị nháy trang chủ trước khi intro hiện.
// - Hiện lại sau 20 phút (localStorage), thêm ?intro=1 vào URL để ép hiện khi test
// - Bật "giảm chuyển động" vẫn hiện, nhưng bản nhẹ (calm) thay vì bỏ hẳn
// - Có chốt an toàn: JS lỗi thì CSS (ziKill) vẫn tự tắt intro sau 3.8s
export const introHead = (nonce) => `<script nonce="${nonce}">try{var d=document.documentElement,W=window,now=Date.now(),force=/[?&]intro=1/.test(location.search),seen=0;
try{seen=+localStorage.getItem('zwic_i2')||0}catch(e){try{seen=+sessionStorage.getItem('zwic_i2')||0}catch(e2){}}
if(force||now-seen>1200000){
try{localStorage.setItem('zwic_i2',String(now))}catch(e){try{sessionStorage.setItem('zwic_i2',String(now))}catch(e2){}}
var calm=matchMedia('(prefers-reduced-motion: reduce)').matches,o=0,t1,t2;
d.classList.add('intro-on');if(calm)d.classList.add('intro-calm');
function out(){if(o)return;o=1;clearTimeout(t1);d.classList.add('intro-out');try{W.dispatchEvent(new Event('snowburst'))}catch(e){}}
function end(){clearTimeout(t2);d.classList.remove('intro-on','intro-out','intro-calm')}
t1=setTimeout(out,calm?1000:2000);t2=setTimeout(end,calm?1600:3100);
W.__introSkip=function(){out();clearTimeout(t2);t2=setTimeout(end,calm?600:1400)};
}}catch(e){}</script>`;

const WORD = 'Zwic Apex';
export const introHtml = `<div class="zi" id="zi" aria-hidden="true">
<div class="zi-p zi-t"></div><div class="zi-p zi-b"></div>
<div class="zi-bg"></div>
<div class="zi-core">
  <div class="zi-logo"><span class="zi-ring"></span><svg class="zi-crown" viewBox="0 0 24 24"><path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1z"/></svg></div>
  <div class="zi-word">${[...WORD].map((c, i) => c === ' ' ? '<span class="zi-sp"></span>' : `<span class="zi-l" style="--i:${i}">${c}</span>`).join('')}</div>
  <i class="zi-line"></i>
  <p class="zi-tag">Nhận key miễn phí · Tự động · Bảo mật</p>
</div>
<div class="zi-prog" id="ziProg"><b id="ziPct">0</b><em>%</em><span><u></u></span></div>
<i class="zi-seam"></i>
</div>`;

// Script cuối <body>: đếm %, chạm để bỏ qua, thanh cuộn, rung nhẹ khi chạm (Android)
export const INTRO_JS = `(function(){
  try {
    var d = document.documentElement, W = window;
    var pct = document.getElementById('ziPct'), pr = document.getElementById('ziProg'), zi = document.getElementById('zi');
    if (pct && pr && zi && d.classList.contains('intro-on')) {
      var T = d.classList.contains('intro-calm') ? 800 : 1700, t0 = performance.now();
      (function s(n) {
        var p = Math.min(1, (n - t0) / T), e = 1 - Math.pow(1 - p, 3);
        pct.textContent = Math.round(e * 100);
        pr.style.setProperty('--p', e.toFixed(3));
        if (p < 1) requestAnimationFrame(s);
      })(t0);
      zi.addEventListener('pointerdown', function() { if (W.__introSkip) W.__introSkip(); });
    }

    var bar = document.createElement('div'); bar.className = 'scroll-prog'; bar.setAttribute('aria-hidden', 'true');
    document.body.appendChild(bar);
    var r = 0;
    function up() {
      r = 0; var h = document.documentElement.scrollHeight - W.innerHeight;
      bar.style.setProperty('--sp', h > 0 ? Math.min(1, W.scrollY / h).toFixed(4) : 0);
    }
    W.addEventListener('scroll', function() { if (!r) r = requestAnimationFrame(up); }, { passive: true }); up();

    document.addEventListener('pointerdown', function(e) {
      if (e.pointerType === 'touch' && e.target.closest && e.target.closest('.btn,.radio-label,.sup') && navigator.vibrate) navigator.vibrate(8);
    }, { passive: true });
  } catch (e) { console.warn('intro js failed', e); }
})();`;

export const liteHead = (nonce) => '';
