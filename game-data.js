/* Practice overlays only. Definitions and exact wording live in HANDBOOK.sources. */
window.GAME_DATA={
 missions:{
  c0:{type:'match',title:'Ba mảnh ghép của sự đồng hành',brief:'Gắn đúng Dẫn, Dụng và Dưỡng với ý nghĩa trong cẩm nang.',labels:['Dẫn','Dụng','Dưỡng'],sources:[35,36,37],stripPrefix:true,order:[1,2,0]},
  c1:{type:'match',title:'Kết nối ba trụ neo',brief:'Một hành động cần đúng điểm tựa. Ghép COL, COP và COE với nội dung tương ứng.',labels:['COL','COP','COE'],sources:[44,55,68],stripPrefix:false,removeLabels:true,order:[2,0,1]},
  c2:{type:'match',title:'Lắp bản đồ 5P',brief:'Mỗi câu hỏi mở ra một trụ cột. Đặt tên trụ cột vào đúng ô.',labels:['Position','Perspective','Pattern of Action','Plan','Principle'],sources:[86,92,98,104,112],order:[3,0,4,1,2]},
  c3:{type:'order',title:'Dựng hành trình VNDGO',brief:'Sắp xếp năm thẻ theo thứ tự V–N–D–G–O trong cẩm nang. Dùng nút lên/xuống hoặc kéo thẻ.',source:151,order:[2,4,0,3,1]},
  c4:{type:'sort',title:'Bàn phân loại quy tắc',brief:'Đọc từng thẻ, rồi đặt vào DO hoặc DON’T. Mỗi thẻ mô tả một hành vi; hãy phân loại trước khi mở tình huống.',items:[
   {source:227,group:'do',text:'Hỏi nhu cầu, tóm tắt để khách xác nhận và giải thích lựa chọn theo mục tiêu.'},
   {source:238,group:'dont',text:'Hứa lợi nhuận chắc chắn hoặc đưa ra “deal riêng” ngoài chính sách công ty.'},
   {source:233,group:'do',text:'Bảo vệ thông tin tài khoản, giao dịch và dữ liệu cá nhân; chia sẻ đúng kênh và phạm vi được phép.'},
   {source:236,group:'dont',text:'Vì KPI hoặc lợi ích riêng mà bỏ qua mục tiêu và sự phù hợp của khách.'},
   {source:229,group:'do',text:'Làm rõ sản phẩm đáp ứng nhu cầu nào, điều kiện và rủi ro ra sao. Kết nối chuyên gia khi vượt phạm vi của mình.'},
   {source:237,group:'dont',text:'Nói sai, nói thiếu hoặc cam kết ngoài điều khoản sản phẩm.'},
   {source:240,group:'dont',text:'Nhận quà khi chưa rõ điều kiện hoặc cách khai báo, rồi mới hỏi người phụ trách.'},
   {source:231,group:'do',text:'Ghi nhận lời hẹn, làm đúng quy định. Khi có vướng mắc, chủ động thông tin và thống nhất cách tiếp tục với khách.'},
   {source:235,group:'dont',text:'Khuyến nghị khi khách chưa hiểu rủi ro; thúc đẩy giao dịch theo cảm tính.'},
   {source:228,group:'do',text:'Hiểu mục tiêu, khả năng tài chính và mức chấp nhận rủi ro theo chuẩn nghiệp vụ; tư vấn trong phạm vi được giao.'},
   {source:239,group:'dont',text:'Thao túng quyết định hoặc đặt lợi ích cá nhân lên trên lợi ích của khách.'},
   {source:230,group:'do',text:'Cung cấp thông tin đúng, đủ, rõ về sản phẩm, rủi ro và điều kiện thị trường.'},
   {source:241,group:'dont',text:'Dùng thông tin khách sai mục đích hoặc chia sẻ trái quy định cho bên thứ ba.'},
   {source:232,group:'do',text:'Khi bàn giao, nêu rõ nhu cầu, việc đã xử lý và phần cần hỗ trợ tiếp.'}
  ]}
 },
 evidence:[{choices:[227,238,232],correct:227},{choices:[240,229,233],correct:229},{choices:[232,239,238],correct:238},{choices:[231,233,235],correct:231},{choices:[230,236,240],correct:236},{choices:[228,237,240],correct:240},{choices:[233,231,229],correct:233}],
 badges:['Khởi đầu vững vàng','Kết nối Tam Bảo','Định hướng 5P','Nắm nhịp VNDGO','Giữ chuẩn hành nghề']
};
