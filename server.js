const express = require('express');
const session = require('express-session');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(session({
  secret: process.env.SESSION_SECRET || 'dev-secret',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60 * 60 * 1000, httpOnly: true }
}));

app.use('/', require('./routes/index'));
app.use('/api', require('./routes/api'));
app.use('/callback', require('./routes/callback'));

app.use((req, res) => res.status(404).render('error', { code: 404, message: 'Trang không tồn tại' }));
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).render('error', { code: 500, message: 'Có lỗi xảy ra, vui lòng thử lại' });
});

app.listen(PORT, () => {
  console.log('\n🚀 Server running: http://localhost:' + PORT);
  console.log('📱 On Termux: mở Chrome → http://127.0.0.1:' + PORT + '\n');
});
