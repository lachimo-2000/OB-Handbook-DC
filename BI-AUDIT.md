# Đối chiếu brand guideline — v0.7.0

Nguồn: `ipa-brand-identity-checker.skill` do người dùng cung cấp, mục `references/brands/vndirect.md`. Phạm vi: mã nguồn, tài nguyên gốc và cấu hình; chưa xem bản chạy trong trình duyệt thật.

Các thay đổi đã áp dụng: xám `#7C7C7B` làm chủ đạo, chữ `#212121`, trắng `#FFFFFF`, cam `#F7941D` dùng cho CTA, số, trạng thái và chi tiết nhỏ. Không dùng mảng cam lớn. Hai theme khác đã được gỡ. Logo giữ góc trên trái và tỷ lệ nguồn; avatar mặc trang phục công sở; ảnh người dùng làm nền bằng lớp phủ CSS.

### 📊 BẢNG ĐÁNH GIÁ CHẤT LƯỢNG NHẬN DIỆN THƯƠNG HIỆU (BI AUDIT)

**Thương hiệu:** VNDIRECT | **Ấn phẩm:** Website onboarding, phiên bản 0.7.0

| Hạng mục kiểm tra | Trạng thái | Chi tiết đánh giá hiện trạng | Đề xuất khắc phục / Yêu cầu chỉnh sửa |
| :--- | :---: | :--- | :--- |
| **1. Quy chuẩn Logo** | Cần chỉnh sửa | Logo PNG 588×162 giữ nguyên cấu trúc và tỷ lệ; CSS đặt trên trái, có khoảng trống. File guideline không nêu minimum-size/safe-zone định lượng. Chưa kiểm tra ảnh thực tế ở mọi viewport; raster hiện có khác palette chuẩn. | Bổ sung logo chuẩn (ưu tiên SVG/PNG gốc) từ bộ phận thương hiệu; đối chiếu clear space và độ đọc slogan trên mobile. Không tự vẽ lại cấu trúc logo. |
| **2. Màu sắc nhận diện** | Cần chỉnh sửa | Màu UI đã dùng đúng mã quy định và tỷ lệ xám/trắng chủ đạo, cam làm nhấn. Riêng logo PNG kế thừa có màu pixel phổ biến xám `#848484`, cam `#F9951B`, khác chuẩn `#7C7C7B`/`#F7941D`. Màu ảnh chụp không phải mẫu màu UI. | Thay asset logo chuẩn; xem bản chạy thật để xác nhận tỷ lệ màu và độ đọc trên nền ảnh. |
| **3. Typography (Font chữ)** | Cần chỉnh sửa | Đã cấu hình SVN Gilroy và UTM Bebas bằng local font. Không có tệp font/giấy phép webfont trong file đính kèm; máy không cài sẽ dùng Arial. | Cung cấp font có quyền nhúng web; thêm vào `fonts/` và cập nhật `brand-fonts.css`. Kiểm tra tiếng Việt, weight và ngắt dòng sau thay font. |
| **4. Layout & Asset** | Cần chỉnh sửa | UI hướng công sở, hoạt động gamification dùng thẻ/hồ sơ, avatar vest xám, chi tiết cam. Ảnh nền giữ nguyên, faded bằng CSS; có reduced motion. Kiểm tra DOM/CSS đã đạt, chưa có kiểm tra bố cục trong browser/LMS thật. | Xem desktop/mobile và môi trường LMS, xác nhận clear space, tương phản, menu và chuyển động trước phát hành. |
| **5. Đồng thương hiệu / Khác** | N/A | Không có logo đối tác, logo sản phẩm phụ hoặc splash screen riêng. Trang chủ là nội dung thường trực; không phải màn hình splash. | Nếu bổ sung co-branding/splash ở bản sau, đối chiếu quy tắc logo ngang hàng và “Empowered by VNDIRECT” khi áp dụng. |

#### 🛠️ KẾT LUẬN & HƯỚNG DẪN HÀNH ĐỘNG CHUNG

- **Trạng thái chung: CẦN CHỈNH SỬA TRƯỚC KHI XUẤT BẢN** theo tiêu chuẩn BI đầy đủ. Gói chức năng sẵn sàng để upload kiểm tra; không coi đây là xác nhận đã đạt BI hoàn toàn.
- Bổ sung font SVN Gilroy/UTM Bebas có quyền nhúng và logo chuẩn theo palette mới.
- Xem bản chạy trên Pages/LMS sau khi bổ sung asset; kiểm tra desktop/mobile trước phát hành cho học viên.
