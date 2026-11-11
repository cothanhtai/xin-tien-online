// Bridge dự phòng: đọc LIVE TikTok -> phát ra ws://localhost:21213/ cho live-mode.html
// Chỉ dùng khi KHÔNG chạy TikFinity (hai cái dùng chung cổng 21213).
//
// Cài 1 lần:   npm install tiktok-live-connector@1.2.3 ws@8.18.0
// Chạy:        node bridge.js ten_tiktok_cua_ban      (không có @, phải đang LIVE)

const { WebcastPushConnection } = require('tiktok-live-connector');
const { WebSocketServer } = require('ws');

const user = process.argv[2];
if (!user) {
  console.log('Thiếu username. Ví dụ: node bridge.js atai.heoquay');
  process.exit(1);
}

const wss = new WebSocketServer({ port: 21213 });
const send = (event, data) => {
  const msg = JSON.stringify({ event, data });
  wss.clients.forEach(c => c.readyState === 1 && c.send(msg));
};
wss.on('connection', () => console.log('live-mode.html đã kết nối'));

const tt = new WebcastPushConnection(user);
const start = () =>
  tt.connect()
    .then(s => console.log('Đã vào LIVE, roomId =', s.roomId))
    .catch(e => {
      console.log('Chưa kết nối được (đã bấm LIVE chưa?):', e.message || e);
      setTimeout(start, 10000);
    });

['chat', 'like', 'gift', 'follow', 'share', 'member'].forEach(ev =>
  tt.on(ev, d => send(ev, d))
);
tt.on('streamEnd', () => console.log('LIVE đã kết thúc'));
tt.on('disconnected', () => { console.log('Mất kết nối, thử lại sau 10s'); setTimeout(start, 10000); });

start();
console.log('Bridge chạy tại ws://localhost:21213/');
