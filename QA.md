# Kiểm tra bản 0.5.0

- Nguồn: CA_Cam_Nang_DC_Chu_Xanh_Khoi_Phuc_5P_2809 (1)(1).docx.
- Đối chiếu: 196 đoạn thân bài và 11 bảng; không thiếu đoạn hoặc ô bảng trong DOM nội dung hiển thị.
- 150 kiểm tra tự động bằng jsdom đã đạt; không có lỗi JavaScript chưa xử lý.
- Đã kiểm tra: sidebar 5/6 chương, 2 lối vào trang chủ, các phần đọc và ghi nhận hoàn thành, phản hồi sai/đúng/thử lại, căn cứ cho từng đáp án, 7 tình huống hành vi, 6 chương suy ngẫm, lưu tiến độ qua tải lại, tìm kiếm không dấu, liên kết kết quả, nút quay lại, menu mobile toggle và đích liên kết.
- Cú pháp các tệp JavaScript đã được kiểm tra.
- Bố cục responsive có các breakpoint 1100, 900 và 600px; font hệ thống và không có font CDN.
- **Giới hạn:** chưa xác nhận hình ảnh hoặc thao tác trong trình duyệt thật. Trình duyệt kiểm tra chặn URL preview cục bộ và file cục bộ. jsdom không mô phỏng bố cục, tải tài nguyên, trình tải xuống hay service worker như trình duyệt thật.
- Chưa kiểm tra trên LMS thực tế; cần kiểm tra JavaScript, iframe/storage và khả năng mở link của LMS trước phát hành cho học viên.
- Đọc hướng dẫn kiểm tra trong README.md trước khi gắn bản phát hành v0.5.0.
