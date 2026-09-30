# Thiết kế hành trình v0.7

Người học vào vai nhân viên chứng khoán tại bàn tư vấn. Hai bản đồ là hai lối vào ở trang chủ; Cẩm nang đang mở, CA Journey chờ nội dung chính thức. Không tự viết tiếp nội dung CA khi nguồn chưa có.

## Vòng hoạt động

1. Đọc một hồ sơ kiến thức ở dạng phần nhỏ; mở bảng/thẻ để khám phá và ghi chú nếu muốn.
2. Gọi lại kiến thức bằng thao tác ghép, sắp xếp hoặc phân loại. Thẻ sai được đánh dấu bằng chữ/ký hiệu, không chỉ màu; người học có thể đối chiếu nguồn và sửa.
3. Áp dụng vào câu hỏi hoặc hồ sơ tình huống. Trong chương quy tắc, quyết định đúng mới mở bước chọn căn cứ. Quy tắc và phản hồi đều lấy từ cẩm nang.
4. Nhận XP, đánh dấu nhiệm vụ và nhận huy hiệu khi hoàn thành đủ chặng. Hoạt động không có tính giờ, mất mạng sống, bảng xếp hạng hay phạt điểm.

Đây là thiết kế học tập cho người trưởng thành: gắn ngữ cảnh công việc, tôn trọng tự chủ, chia nhỏ thông tin, ưu tiên luyện nhớ và phản hồi. Mục tiêu là tạo động lực quay lại và giúp nhận ra điều chưa hiểu; không tuyên bố đo năng lực hành nghề bằng XP.

## Lựa chọn tương tác

| Nội dung | Tương tác | Căn cứ |
|---|---|---|
| Dẫn–Dụng–Dưỡng | Ghép 3 thẻ ý nghĩa | Nguồn 35–37 |
| Tam Bảo | Nối COL/COP/COE với hành động | 44, 55, 68; tên trụ neo được ẩn trong câu hỏi |
| 5P | Ghép trụ cột với câu hỏi | 86, 92, 98, 104, 112 |
| VNDGO | Sắp thứ tự các nếp | Bảng 151; không biến 5P thành quy trình tuần tự |
| Hành vi | Phân loại 14 thẻ DO/DON’T | 227–233, 235–241 |
| 7 tình huống | Quyết định + chọn quy tắc | Nguồn ghi trong từng scenario/evidence |

Thẻ phân loại diễn đạt hành vi để người học tự phân biệt; ví dụ thẻ nhận quà khi chưa rõ điều kiện là hành vi mô phỏng ngược lại quy tắc 240, không phải trích nguyên văn. Nội dung nguồn ở thẻ đọc, tóm tắt và phản hồi vẫn giữ nguyên.

## Hình ảnh, chuyển động và khả năng truy cập

Ảnh trang chủ do người dùng cung cấp. Dùng CSS phủ trắng để tạo nền mờ, không sửa ảnh gốc. Avatar là SVG dựng bằng code: vest ghi xám, sơ mi trắng, phụ kiện cam nhỏ. Không tạo logo mới hoặc gắn logo giả lên đồng phục.

Chuyển động ngắn theo hành động: hover, ripple, thẻ xuất hiện, phân loại, huy hiệu. Không có chuyển động lặp liên tục trong khi đọc. Khi bật giảm chuyển động hoặc hệ điều hành yêu cầu, tắt CSS/WAAPI liên quan. Kéo thả có thao tác bấm và nút lên/xuống tương đương cho bàn phím/cảm ứng. Feedback có vùng live; biểu mẫu có label; trạng thái đúng/sai có chữ; đọc toàn bộ bảng vẫn có thể mở theo yêu cầu.

Chưa có thử nghiệm với người học hoặc browser/LMS thật. Xem QA.md và BI-AUDIT.md trước khi phát hành cho đào tạo.
