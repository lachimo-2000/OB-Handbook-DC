# VNDIRECT · Hành trình hội nhập — v0.7.0

Website tĩnh, các tệp tách riêng, mở bằng `index.html`. Không cần cài GitHub Desktop, Node hoặc chạy build.

## Bản cập nhật này

- Chỉ còn một giao diện, nền xám/trắng với cam làm điểm nhấn, giữ phong cách thẻ và chuyển động của hướng thiết kế đã chọn. Bỏ hoàn toàn nút chọn giao diện và tên các kiểu.
- Trang chủ dùng nguyên ảnh VNDIRECT được gửi, làm mờ bằng lớp phủ CSS. Có hai bản đồ: Cẩm nang hành nghề và CA Journey.
- Chọn avatar nhân viên nam/nữ mặc trang phục công sở và nhập tên. Có thể đổi nhân vật/tên trong nút **Nhân vật / Level** trên thanh trên.
- Cẩm nang gồm 5 chặng, mỗi chặng có 3 nhiệm vụ: đọc hồ sơ, thử thách tương tác, trạm kiểm tra/tình huống. Hoàn thành đủ một chặng tăng một level. Level bắt đầu từ 1 và kết thúc ở 6.
- Hoạt động: ghép Dẫn–Dụng–Dưỡng, nối COL/COP/COE, ghép 5P với câu hỏi, sắp thứ tự VNDGO, phân loại 14 hành vi DO/DON’T, 13 câu ôn tập và 7 hồ sơ tình huống có hai bước (xử lý + căn cứ).
- Nội dung chính giữ nguyên 196 đoạn và 11 bảng từ tài liệu DOCX đã duyệt. Bài tập là lớp thực hành biên soạn thêm, có tham chiếu về nguồn; không bổ sung chính sách hay lời khuyên đầu tư mới.
- CA Journey chỉ có thông báo **“Nội dung sẽ được cập nhật trong thời gian tới.”** Các đường dẫn CA cũ cũng về trạng thái này. Không còn bài tập, suy ngẫm hay điểm số cho CA Journey.
- Menu trái chỉ hiện khi học Cẩm nang; mục con đang mở được đánh dấu chính xác.
- DO/DON’T → thẻ tóm tắt → phân loại → hồ sơ tình huống. Cuối lượt ôn tập chương 1–4 có **Học chương tiếp theo**.
- Hiệu ứng theo thao tác: chuyển trang/thẻ, phản hồi lựa chọn, ripple, chuyển thẻ, huy hiệu và thông báo lên level. Có **Giảm chuyển động** và tự tôn trọng thiết lập của hệ điều hành. Không dùng đếm ngược hay nhạc tự phát.

## XP và huy hiệu

| Hoạt động | XP |
|---|---:|
| Hoàn thành một hồ sơ kiến thức | 20 |
| Mở một quy tắc | 5 |
| Chinh phục một câu ôn tập | 25 |
| Hoàn thành một thử thách tương tác | 80 |
| Xử lý đủ hai bước của một hồ sơ tình huống | 40 |
| Hoàn thành một chặng / nhận huy hiệu | 100 |

Tối đa 2015 XP. Mỗi mục chỉ nhận XP một lần; làm lại, đổi avatar hoặc tải lại trang không cộng trùng và không trừ điểm. XP là điểm khuyến khích; level được nâng theo số chặng đã hoàn thành, không phải theo một ngưỡng XP riêng. Người học được tra cứu các chương tự do.

Chương quy tắc yêu cầu mở đủ 14 quy tắc, phân loại đúng 14 thẻ và hoàn thành 7 tình huống hai bước. Bốn chương trước yêu cầu đọc đủ các mục, hoàn thành thử thách và từng câu ôn tập. Hoàn thành lượt ôn tập không tự động đánh dấu đã qua chặng nếu còn nhiệm vụ khác.

## Dữ liệu cũ và lưu tiến độ

Dùng tiếp khóa `vndirect-onboarding-0.5` để giữ lịch sử đọc và ghi chú từ v0.5/v0.6. Câu ôn tập cũ đã trả lời đúng được ghi nhận. Để nhận huy hiệu v0.7, người học cần hoàn thành thử thách mới; các tình huống cũ còn cần bước chọn căn cứ. Ghi chú CA cũ được giữ trong storage nhưng không hiển thị hoặc xuất vào hành trình mới.

Tên, avatar, tiến độ và ghi chú chỉ nằm trong localStorage của trình duyệt. Không có đăng nhập, máy chủ tài khoản hay gửi dữ liệu cá nhân ra ngoài. Nếu trình duyệt chặn lưu trữ, vẫn học được trong phiên hiện tại. Dùng tên hoặc biệt danh; không ghi dữ liệu khách hàng vào ghi chú. Có nút xuất ghi chú từ trang đọc.

Gói này là web tĩnh, **chưa phải SCORM/xAPI**, không đồng bộ điểm/trạng thái với LMS. Nếu LMS dùng iframe hoặc xóa/chặn storage, tiến độ có thể không giữ giữa các phiên. Cần kiểm tra trên LMS thực tế.

## Nhận diện thương hiệu

Đối chiếu `ipa-brand-identity-checker.skill` → quy định VNDIRECT:

- Xám chính `#7C7C7B`, văn bản `#212121`, cam nhấn `#F7941D`; dùng các màu phụ được liệt kê trong guideline.
- Logo nằm trên cùng bên trái, giữ tỷ lệ ảnh nguồn, không vẽ lại hoặc bóp méo. Ảnh nền giữ nguyên; chỉ thay độ hiện bằng lớp phủ CSS.
- Đã cấu hình SVN Gilroy/UTM Bebas. **Chưa có tệp font được cấp phép**: nếu máy không cài font, trình duyệt dùng Arial. Xem `fonts/README.md`.
- Logo PNG kế thừa có màu raster phổ biến xám `#848484`, cam `#F9951B`, chưa trùng các mã chuẩn trong guideline mới. Giữ nguyên logo nguồn để tránh tự vẽ/sửa kết cấu; cần thay bằng asset logo chuẩn do bộ phận thương hiệu cung cấp để chốt BI.
- Xem `BI-AUDIT.md` về kết quả và phần cần bổ sung. Không coi cấu hình font hoặc kiểm tra code là chứng nhận đạt BI hoàn toàn.

## Đưa lên GitHub bằng trình duyệt

1. Giải nén ZIP.
2. Mở repository đang dùng trên GitHub; tạo nhánh cập nhật `update-onboarding-v0.7` nếu cần quy trình duyệt.
3. Upload **các tệp và thư mục bên trong gói**. `index.html` phải ở thư mục gốc được dùng cho GitHub Pages. Giữ nguyên `images`, `icons`, `fonts` cùng các tệp JavaScript/CSS.
4. Thay các tệp trùng tên, thêm `game-data.js`, `game.css`, `components.css`, `brand-fonts.css` và ảnh nền. Tệp `themes.css` cũ không còn được dùng, có thể xóa khỏi repository.
5. Commit với mô tả `Add player journey and interactive missions v0.7.0`. Nếu dùng nhánh, tạo Pull Request để review và merge theo quy trình của nhóm.
6. Với Pages đã cấu hình, deployment tiếp theo sử dụng bản cập nhật trên nhánh xuất bản. Nếu chưa cấu hình Pages, chọn nguồn xuất bản là nhánh chính và thư mục gốc trong phần Pages của repository.
7. Mở URL Pages, tải lại trang và kiểm tra tạo nhân vật, một thử thách, ghi nhận XP, menu trên điện thoại. Đưa URL đã kiểm tra vào LMS.

Không upload nguyên ZIP làm nội dung trang web. Không cần cài GitHub Desktop. Tuân theo quyền truy cập và chính sách xuất bản nội bộ của công ty khi chọn repository/LMS.

## Các tệp

| Tệp | Vai trò |
|---|---|
| `index.html` | Khung trang và các dialog |
| `content.js` | Nội dung nguồn được giữ nguyên |
| `learning.js` | 13 câu ôn tập, 7 tình huống và căn cứ |
| `game-data.js` | Thử thách, mảnh ghép và huy hiệu |
| `app.js` | Điều hướng, hoạt động, XP, lưu tiến độ và tìm kiếm |
| `ui.js` | Avatar SVG, biểu tượng, hiệu ứng và giảm chuyển động |
| `brand-fonts.css` | Cấu hình font thương hiệu |
| `styles.css`, `components.css`, `game.css` | Giao diện chung, đọc tài liệu, trải nghiệm hành trình |
| `images/`, `icons/`, `fonts/` | Ảnh nền, logo, icon và hướng dẫn bổ sung font |
| `sw.js` | Gỡ cache offline cũ trong phạm vi site |
| `QA.md`, `BI-AUDIT.md`, `DESIGN-NOTES.md` | Phạm vi kiểm tra và quyết định thiết kế |

Không dùng CDN, font từ xa, analytics hoặc thư viện runtime bên ngoài. Chạy từ file cục bộ tùy quyền JavaScript/storage của trình duyệt. Gói ZIP không chứa phần mềm cần cài.
