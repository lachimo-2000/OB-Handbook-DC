# Ghi chú thiết kế học tập dành cho người quản trị

## Cách áp dụng

- Chia nội dung thành phần ngắn với nút trước/sau; giữ bản đầy đủ để tra cứu. Mục tiêu là giảm số thông tin phải xử lý cùng lúc, không cắt bỏ nội dung nguồn.
- Kết hợp nội dung minh họa với thực hành, truy hồi kiến thức và phản hồi có căn cứ. Các bài tập không khóa quyền đọc tài liệu.
- Liên hệ công việc: tình huống về thông tin chưa rõ, phạm vi tư vấn, lời hẹn, bàn giao, KPI, quà tặng và dữ liệu khách. Tình huống được ghi rõ là mô phỏng, không phải case thực tế của công ty.
- Quyền tự chủ của người học trưởng thành: chọn chương theo nhu cầu, tra cứu bất kỳ lúc nào, viết ghi chú riêng, thử lại không giới hạn.
- Dùng tiến độ và mốc hoàn thành làm phản hồi cá nhân; không suy diễn điểm thực hành thành năng lực nghề nghiệp đã được chứng nhận.
- CA Journey: sáu câu hỏi nguồn được giữ nguyên; lời dẫn, gợi ý suy ngẫm và liên kết cẩm nang là thiết kế học tập mới. Không có dữ liệu nghiệp vụ đủ để xây dựng sáu chương trả lời chính thức.

## Tài liệu tham khảo phương pháp

- IES / What Works Clearinghouse, *Organizing Instruction and Study to Improve Student Learning*: practice testing/retrieval và xen kẽ ví dụ có hướng dẫn với thực hành. https://ies.ed.gov/ncee/wwc/PracticeGuide/1
- NSW CESE, *Cognitive load theory in practice*: hướng dẫn rõ, ví dụ, luyện tập và phản hồi. https://education.nsw.gov.au/about-us/education-data-and-research/cese/publications/practical-guides-for-educators/cognitive-load-theory-in-practice

Đây là cơ sở thiết kế; không phải bằng chứng đánh giá hiệu quả của khóa học VNDIRECT này. Nên lấy phản hồi người học và quan sát việc vận dụng trước khi kết luận về hiệu quả.

## Cập nhật nội dung lần sau

- `content.js` chứa cả khối nội dung và `sources` dùng cho căn cứ phản hồi. Khi cập nhật DOCX, phải cập nhật đồng bộ hai phần, rồi rà lại ID nguồn trong `learning.js`.
- Khi thay đổi câu hỏi/đáp án hoặc nội dung đáng kể, đổi khóa lưu tiến độ trong `app.js` để tránh kế thừa nhầm kết quả cũ; cân nhắc xuất ghi chú trước khi đổi.
- Giữ nguyên các thuật ngữ trong nguồn (kể cả tiêu đề còn dùng CA trong khi phần khác dùng DC), chỉ sửa khi chủ sở hữu nội dung duyệt.
- Giữ file đã duyệt trên `main`, cập nhật qua nhánh và Pull Request, gắn Release sau kiểm tra.
