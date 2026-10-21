export const SESSION_TTL = 900;     // giây - tuổi thọ phiên phía server (trượt theo hoạt động)
export const COOKIE_TTL = 1800;     // giây - tuổi thọ cookie sid (phiên thật sự do Durable Object quyết định)
export const BOT_TTL = 600;         // giây - thẻ bài Turnstile
export const MIN_ADS_SECONDS = 15;  // nên đo thời gian thật của Link4M rồi chỉnh lại (vd 20-30)
export const MAX_ADS_SECONDS = 600; // token vượt link quá cũ thì bỏ
export const DAILY_LIMIT = 12;
export const TIERS = { Normal: 1, VIP: 2 };

// Chỉ chấp nhận link rút gọn trả về từ domain của Link4M. Chỉnh lại nếu Link4M dùng domain khác.
export const ADS_HOST_RE = /^https:\/\/([a-z0-9-]+\.)*link4m\.(co|com)\//i;
export const APP_DOWNLOAD_URL = 'https://www.mediafire.com/file/bimuah51pzdpms3/Zwic_Apex_v3.1.apk/file';
