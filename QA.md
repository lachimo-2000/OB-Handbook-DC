# QA — v0.7.0

Kiểm tra hoàn tất ngày 2026-09-30.

## Kết quả

- **260 kiểm tra tự động đạt**: 246 kiểm tra hành trình/nội dung và 14 kiểm tra nâng cấp dữ liệu, lưu trữ, thao tác và tài nguyên.
- Không có lỗi JavaScript hoặc CSS parser trong các lần kiểm tra.
- `content.js` giữ nguyên toàn bộ `chapters` và `sources` so với v0.6: **196 đoạn, 11 bảng**, không thiếu nội dung trong DOM đã render. Chỉ cập nhật phiên bản gói.
- 22 hồ sơ đọc, 13 câu ôn tập, 5 thử thách tương tác và 7 hồ sơ tình huống hai bước đều đi được đến kết quả đúng. Toàn bộ chặng dẫn đến **Level 6, 5 huy hiệu, 2015 XP**.

## Các rủi ro đã kiểm tra

| Phần | Kết quả |
|---|---|
| Trang chủ, avatar và tên | Có 2 map, 2 nhân vật; tạo/sửa/lưu được; tên được escape trước khi hiển thị |
| CA Journey | Chỉ thông báo chờ cập nhật; cả deep link cũ không hiển thị hoạt động tự tạo |
| Điều hướng | 5 chặng; đúng một mục con active; quay lại lịch sử; menu mobile mở/đóng; skip link không đổi route sai |
| Nội dung | Mọi đoạn/bảng của nguồn vẫn có thể đọc; completion yêu cầu mở đủ phần |
| Ghép thẻ | Có phản hồi sai, sửa lại, giữ tiến độ dở; bấm và kéo thả dùng cùng kết quả |
| Sắp xếp | Sai có phản hồi; nút lên/xuống và kéo thả cập nhật thứ tự; đúng nhận XP |
| Phân loại | 14 thẻ; hoàn tác và đổi nhóm; không qua khi còn sai; đúng dẫn sang hồ sơ tình huống |
| Tình huống | Chọn cách xử lý chưa đủ để hoàn tất; cần chọn đúng căn cứ; phản hồi trích đúng nguồn |
| XP & level | Cộng một lần; làm lại/đổi nhân vật/tải lại không tăng trùng; đủ 3 nhiệm vụ mới nhận huy hiệu |
| Nâng cấp | Giữ lịch sử đọc, ôn tập đúng và ghi chú cũ; yêu cầu làm các nhiệm vụ mới để nhận huy hiệu |
| Storage | Khi bị chặn vẫn tương tác trong phiên; một số dữ liệu mảng hỏng được phục hồi an toàn |
| Chuyển động | Tùy chọn giảm chuyển động được lưu và áp dụng; bỏ hẳn 2 theme cũ và UI đổi theme |
| Tài nguyên | Mọi CSS/JS/ảnh được tham chiếu đều có trong gói; không có CDN hoặc yêu cầu font chưa tồn tại |
| Ảnh nền | Bản sao nguyên byte của `image(6).png`; chỉ faded qua CSS |

Kiểm tra tương tác thực hiện bằng jsdom; CSS được parse bổ sung bằng css-tree, JS kiểm tra cú pháp bằng Node. Báo cáo đầy đủ nằm trong `qa-results.json` và `qa-edges-results.json`.

## Giới hạn cần kiểm tra trên môi trường thật

**Chưa kiểm tra hiển thị trong trình duyệt thật hoặc LMS**: môi trường preview cục bộ trước đó bị chặn. DOM tests không chứng minh được pixel layout, tương phản trên ảnh ở mọi viewport, độ mượt chuyển động hay hành vi drag trên mọi thiết bị.

Trước khi đưa cho người học:

1. Bổ sung font và logo chuẩn; đọc `BI-AUDIT.md`.
2. Mở Pages trên desktop (khoảng 1440px), tablet và điện thoại (360–390px); kiểm tra chữ, thẻ dài, avatar, nền và sidebar không che nội dung.
3. Dùng Tab/Enter, giảm chuyển động của hệ điều hành, zoom 200%, bấm thẻ và kéo thả.
4. Trên LMS: tạo nhân vật, làm một nhiệm vụ, tải lại/đóng mở bài; xác nhận chính sách storage/iframe giữ được tiến độ như mong đợi.
5. Kiểm tra URL Pages trỏ đến bản mới và tải lại tài nguyên sau deployment.

Chưa kiểm tra SCORM/xAPI vì gói không tích hợp các chuẩn đó; không gửi điểm đến LMS. Chưa có user testing hoặc đánh giá hiệu quả học tập thực tế.
