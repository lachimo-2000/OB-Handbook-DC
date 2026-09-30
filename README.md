# Font thương hiệu cần bổ sung

Brand guideline VNDIRECT yêu cầu **SVN Gilroy** (chính) và **UTM Bebas** (phụ).
File guideline được cung cấp chỉ có quy định, không kèm tệp font hoặc giấy phép webfont.

`brand-fonts.css` đã khai báo đúng tên font và tìm bản được cài hợp lệ trên máy người học. Khi không có, trình duyệt dùng Arial để nội dung vẫn đọc được. Đây là fallback kỹ thuật, **chưa đáp ứng đầy đủ typography theo BI**.

Để hiển thị đồng nhất trên GitHub Pages/LMS, cần tệp font có quyền sử dụng và nhúng web. Đặt font được cấp phép vào thư mục này, rồi bổ sung URL vào các khai báo tương ứng trong `brand-fonts.css`, ví dụ:

```css
@font-face {
  font-family: 'SVN Gilroy';
  src: url('fonts/SVN-Gilroy-Regular.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
```

Thêm riêng các weight thực sự được cung cấp (Regular, Medium, SemiBold, Bold) và UTM Bebas. Không đặt một tệp Regular dưới tên Bold. Nếu là variable font, dùng weight range đúng metadata của font. Đường dẫn trên chỉ là hướng dẫn; CSS đang chạy không yêu cầu tệp chưa được cung cấp.

Sau khi bổ sung, kiểm tra tiếng Việt, ngắt dòng, nút dài và chiều cao thẻ trên desktop/mobile. Không tải font từ nguồn không rõ quyền sử dụng.
