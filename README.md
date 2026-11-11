# Chén Inox Xin Vía 🥣

Game giải trí hài hước: chìa chén inox xin **tiền ảo** trên vỉa hè Sài Gòn.
Tiền trong game là tiền ảo, không nạp, không rút, không quy đổi.

## Các file

| File | Dùng để làm gì |
|---|---|
| `index.html` | Game chính (clicker). Mở bằng trình duyệt là chơi được. |
| `live-mode.html` | Màn hình dọc 9:16 để gắn vào TikTok LIVE Studio. Người xem comment, thả tim, vote 1/2 sẽ hiện trong game. |
| `bridge.js` | Phương án dự phòng khi không dùng TikFinity: đọc LIVE TikTok rồi gửi sang `live-mode.html`. |
| `package.json` | Danh sách thư viện cho `bridge.js`. |
| `assets/nen-game.jpg` | Ảnh nền phố đêm (bản gốc để chỉnh sửa). Ảnh này đã nhúng sẵn trong 2 file HTML. |

## Chơi thử

Mở `index.html` bằng Chrome. Hoặc bật GitHub Pages (Settings → Pages → Branch `main` / root),
rồi chơi tại `https://<tên-github>.github.io/xin-tien-online/`.

## Dùng khi livestream

1. Cài **TikFinity**, đăng nhập username TikTok, bấm LIVE.
2. Mở `live-mode.html` bằng Chrome. Góc trên phải hiện **"● Đang nhận LIVE"** là đã kết nối.
   Nếu chưa được: xem địa chỉ WebSocket trong TikFinity → Setup, dán vào ô *Địa chỉ WebSocket*, bấm **Kết nối**.
3. TikTok LIVE Studio → chế độ dọc → thêm nguồn **Link/Browser** → chọn `live-mode.html`, kích thước 1080 × 1920.
4. Bấm **Ẩn bảng** (phím `C`) trước khi lên sóng.

Phím tắt: `Space` chìa chén · `V` mở vote · `R` mưa tiền · `C` ẩn/hiện bảng điều khiển.

### Dự phòng không dùng TikFinity (không chạy cùng lúc với TikFinity)

```bash
npm install
node bridge.js ten_tiktok_cua_ban
```

## Lưu ý quy định TikTok LIVE

- Host phải có mặt dẫn game, không để game tự chạy.
- Không kêu gọi "tặng quà đi", không hứa thưởng để đổi quà. Kêu gọi comment, thả tim, vote thì thoải mái.
- Không bật "Người xem giả" khi đang live thật (nhãn đỏ **CHẾ ĐỘ THỬ** sẽ hiện nếu đã bấm nút thử nghiệm; tải lại trang để tắt).
