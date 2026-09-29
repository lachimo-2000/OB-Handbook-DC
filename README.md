# VNDIRECT — Cẩm nang hành nghề & CA Journey

Phiên bản **0.5.0** · Nội dung ngày **29/09/2026**.

Website tĩnh gồm hai lộ trình: Cẩm nang hành nghề (5 chương) và CA Journey (6 chương suy ngẫm). Không cần npm, cài phần mềm hay chạy bước build để xuất bản.

## Đưa lên GitHub bằng trình duyệt

1. Giải nén ZIP vào một thư mục trên máy.
2. Mở repository GitHub. Tạo nhánh `update-onboarding-v0.5` từ `main` nếu đang cập nhật một site đã có.
3. Chọn **Add file → Upload files**. Kéo các tệp và thư mục trong gói vào. `index.html`, `content.js`, `learning.js`, `app.js`, `styles.css` phải cùng nằm ngay ở thư mục gốc repository; giữ nguyên thư mục `images` và `icons`.
4. Chọn **Commit changes** với mô tả `Add onboarding learning experience v0.5.0`.
5. Với repository đang có: tạo Pull Request về `main`, kiểm tra các thay đổi, rồi merge khi được duyệt.
6. Trong **Settings → Pages**, chọn **Deploy from a branch → main → /(root) → Save**.
7. Khi deployment hoàn tất, mở URL Pages và kiểm tra cả hai lộ trình. Không upload nguyên ZIP làm nội dung website.
8. Tạo Release `v0.5.0` sau khi kiểm tra. Giữ nguyên tên file khi cập nhật; GitHub lưu các phiên bản bằng commit.

Đặt một link tới URL Pages trong LMS. Tùy LMS, có thể nhúng dưới dạng Web/URL/iframe nếu chính sách của hệ thống cho phép.

## Đặc điểm của bản này

- Trang chủ là nơi duy nhất có hai lối vào chính. Thanh trên chỉ có logo, Trang chủ, Tìm kiếm và Mục lục trên màn hình nhỏ.
- Không có sidebar tại trang chủ. Trong mỗi lộ trình, sidebar chỉ hiển thị chương của lộ trình đó.
- Nội dung nguyên văn được chia thành các phần đọc ngắn. Có thẻ mở nội dung, bảng tham chiếu đầy đủ, tự liên hệ, 13 câu ôn tập và 7 tình huống quy tắc hành vi.
- Quy tắc hành vi mở bằng tình huống mô phỏng, lựa chọn và căn cứ nguyên văn; toàn bộ 14 quy tắc nằm trong phần tóm tắt.
- Hoàn thành một chương cẩm nang yêu cầu ghi nhận đã đọc các mục và trả lời đúng các câu ôn tập; chương quy tắc hoàn thành khi luyện đúng 7 tình huống. Được thử lại, không tính giờ, không khóa nội dung.
- CA Journey có 6 chương dựa trên 6 câu hỏi đã được cung cấp. Bài tập suy ngẫm là phần biên soạn phục vụ học tập, không phải câu trả lời chính thức về CA hoặc chính sách công ty. Không chấm điểm ghi chú.
- Tiến độ và ghi chú lưu bằng localStorage trên trình duyệt đang dùng. Có nút xuất ghi chú thành TXT. Không gửi ghi chú tới máy chủ.
- Bản web này **chưa phải SCORM/xAPI**, không gửi điểm hoặc trạng thái hoàn thành về LMS. Không có tài khoản hoặc đồng bộ giữa thiết bị. Chế độ ẩn danh, việc xóa dữ liệu trình duyệt hoặc chặn storage trong iframe có thể làm mất/không lưu tiến độ.
- Không tải thư viện, font hoặc dịch vụ phân tích từ bên ngoài. Giữ màu cam `#F7941D`, xám thương hiệu `#848485`, logo VNDIRECT và bộ font hệ thống (Segoe UI/Arial).

## Các tệp cần giữ cùng nhau

| Tệp | Mục đích |
|---|---|
| `index.html` | Điểm vào, khung giao diện |
| `content.js` | Nội dung DOCX và chỉ mục căn cứ nguồn |
| `learning.js` | Câu hỏi, tình huống, đáp án, tham chiếu nguồn và câu hỏi suy ngẫm |
| `app.js` | Điều hướng, tiến độ, phản hồi, tìm kiếm và ghi chú |
| `styles.css` | Bố cục, kiểu chữ, màu sắc, màn hình nhỏ |
| `images/`, `icons/` | Logo và biểu tượng ứng dụng |
| `manifest.json` | Thông tin ứng dụng web |
| `sw.js` | Gỡ cache offline v0.3/v0.4 cũ để tránh nội dung lỗi thời |

Phiên bản này cần mạng khi truy cập URL. Mở `index.html` cục bộ vẫn đọc và tương tác được khi trình duyệt cho phép JavaScript; khả năng lưu tiến độ với `file://` tùy trình duyệt.

## Kiểm tra trước khi đưa cho học viên

- Trang chủ không có sidebar; chỉ có 2 thẻ lộ trình.
- Vào Cẩm nang: sidebar có 5 chương. Vào CA Journey: sidebar có 6 chương.
- Mở COL/COP/COE và kiểm tra nội dung DOCX mới; mở thử các bảng.
- Trả lời sai/đúng một câu hỏi, thử lại và đọc căn cứ.
- Luyện một tình huống quy tắc rồi xem tóm tắt.
- Ghi chú và tải lại trang để kiểm tra lưu tiến độ trên môi trường LMS thực tế.
- Kiểm tra trên máy tính và điện thoại; kiểm tra tìm kiếm, nút quay lại, đường dẫn mẹ và trang chủ.

Đối chiếu nội dung nguồn và kiểm thử tương tác bằng DOM đã hoàn tất khi đóng gói. Kiểm tra hình ảnh trong trình duyệt thực chưa hoàn tất vì môi trường tạo gói chặn địa chỉ preview cục bộ. Xem `QA.md` để biết phạm vi kiểm thử.
