/* Learning prompts are editorial additions. Official definitions remain in content.js.
   Every scored answer cites source paragraphs/rows from the approved DOCX. */
window.LEARNING = {
 checkpoints: {
  c0:[
   {q:'Khách hỏi DC chọn giúp một khoản đầu tư. Vai trò nào phù hợp với cẩm nang?',options:['Quyết định thay khách để tiết kiệm thời gian.','Làm rõ lựa chọn, giúp khách chủ động quyết định trong phạm vi được giao.','Để khách tự tìm hiểu hoàn toàn.'],correct:1,source:38},
   {q:'Trao kiến thức và công cụ đúng thời điểm để khách tự vận dụng thuộc việc nào?',options:['Dẫn','Dưỡng','Dụng'],correct:2,source:36}
  ],
  c1:[
   {q:'Chưa chắc thông tin về sản phẩm. Trụ neo nào giúp DC tra chuẩn và hỏi đúng người?',options:['COL — Giữ HƯỚNG','COP — Giữ CHUẨN','COE — Giữ NHỊP'],correct:1,source:55},
   {q:'Làm thật, nhận feedback rồi chuẩn hóa cách làm gắn với trụ neo nào?',options:['COE','COL','COP'],correct:0,source:73},
   {q:'Trước một đề xuất, DC nhìn lại mục tiêu và nhu cầu thực của khách. Đây là trọng tâm của:',options:['COP','COE','COL'],correct:2,source:44}
  ],
  c2:[
   {q:'“Thấu hiểu — Đồng hành — Kết nối” thuộc trụ cột nào?',options:['Perspective','Position','Plan'],correct:1,source:85},
   {q:'Một kế hoạch đã có việc cần làm và người phụ trách. Theo tài liệu, còn cần làm rõ gì?',options:['Chỉ cần thêm tên sản phẩm.','Không cần thêm nếu người phụ trách đã hiểu.','Đầu ra hoặc chỉ số và thời hạn.'],correct:2,source:[106,107,108,109]},
   {q:'Cập nhật hồ sơ, giữ lịch hẹn và theo dõi hỗ trợ khách thuộc:',options:['FC','OC'],correct:0,source:123},
   {q:'5A được dùng để soi những phần nào?',options:['Chỉ Plan.','Position, Perspective, Pattern of Action và Plan.','Chỉ hình ảnh thương hiệu.'],correct:1,source:113}
  ],
  c3:[
   {q:'Khách vừa hỏi về sản phẩm. Theo nhịp V, DC nên làm gì trước?',options:['Mời khách chọn ngay sản phẩm.','Tự điền phần thông tin còn thiếu.','Làm rõ nhu cầu, tóm tắt để khách xác nhận.'],correct:2,source:[153,167]},
   {q:'Khi nào có thể chuyển tiếp sau nhịp N?',options:['Khách nói lại được hướng đi bằng lời của mình sau khi các điểm chưa rõ được làm rõ.','DC đã giới thiệu xong tất cả sản phẩm.','Khách đã nghe đủ thời lượng tư vấn.'],correct:0,source:181},
   {q:'Ở nhịp G, cách trao kiến thức nào phù hợp?',options:['Trình bày tất cả kiến thức trong một lần.','Chia nội dung theo điều khách cần hiểu và trao công cụ để khách tự vận dụng.','Dẫn khách tới lựa chọn định sẵn.'],correct:1,source:[197,198,207]},
   {q:'Dcare và Dinvest ở nhịp O lần lượt nói về:',options:['Cách đồng hành và con đường đầu tư.','Chỉ tiêu và kết quả công việc.','Thông tin định danh và khả năng chịu rủi ro.'],correct:0,source:211}
  ]
 },
 scenarios:[
  {id:'r1',title:'Trước khi đề xuất',scene:'Khách hỏi ngay về một sản phẩm, nhưng bạn chưa biết mục tiêu và mức chấp nhận rủi ro của họ.',options:['Hỏi nhu cầu, khả năng tài chính và rủi ro; tóm tắt để khách xác nhận.','Khuyến nghị ngay vì sản phẩm đang được nhiều người quan tâm.'],correct:0,sources:[227,228,235]},
  {id:'r2',title:'Một câu hỏi vượt phạm vi',scene:'Khách cần lời giải thích về một nội dung chuyên sâu ngoài phạm vi bạn được giao.',options:['Tự suy luận để trả lời ngay.','Làm rõ nhu cầu và kết nối chuyên gia phù hợp.'],correct:1,sources:[229,228]},
  {id:'r3',title:'“Có chắc chắn có lãi không?”',scene:'Khách muốn bạn đảm bảo lợi nhuận trước khi quyết định.',options:['Hứa một mức chắc chắn để khách yên tâm.','Giải thích đúng thông tin, rủi ro và điều khoản; không cam kết ngoài chính sách.'],correct:1,sources:[230,237,238]},
  {id:'r4',title:'Lời hẹn và bàn giao',scene:'Bạn gặp vướng mắc và cần đồng nghiệp tiếp tục hỗ trợ khách.',options:['Chủ động thông tin, thống nhất bước tiếp; bàn giao nhu cầu, việc đã xử lý và việc còn lại.','Chuyển tên khách cho đồng nghiệp rồi chờ họ tự tìm hiểu.'],correct:0,sources:[231,232]},
  {id:'r5',title:'Áp lực kết quả',scene:'Một lựa chọn có lợi cho KPI của bạn nhưng chưa phù hợp với mục tiêu khách hàng.',options:['Ưu tiên lựa chọn đó vì chỉ tiêu đang gấp.','Quay lại mục tiêu và sự phù hợp của khách; tôn trọng quyết định của họ.'],correct:1,sources:[236,239,227]},
  {id:'r6',title:'Một món quà',scene:'Khách đề nghị tặng quà. Bạn chưa rõ điều kiện nhận và cách khai báo.',options:['Nhận trước rồi kiểm tra sau.','Tra chính sách và hỏi người phụ trách trước khi nhận.'],correct:1,sources:[240]},
  {id:'r7',title:'Chia sẻ thông tin',scene:'Bạn cần phối hợp hỗ trợ khách và đang cân nhắc chia sẻ thông tin tài khoản.',options:['Chia sẻ đúng kênh, đúng mục đích và phạm vi được phép.','Gửi toàn bộ dữ liệu cho bên thứ ba để xử lý nhanh.'],correct:0,sources:[233,241]}
 ],
 journey:[
  {id:'j1',title:'CA là ai?',prompt:'Bạn hiểu vai trò của mình như thế nào? Viết một câu giới thiệu gắn với giá trị muốn trao cho người được phục vụ.',fields:['Vai trò của tôi','Giá trị tôi muốn trao'],links:['position','cares']},
  {id:'j2',title:'CA đang ở đâu?',prompt:'Nhìn lại vị trí hiện tại của bạn trong công việc: điều đã rõ và đầu mối cần tìm hiểu thêm.',fields:['Điều tôi đã rõ về vai trò hiện tại','Người hoặc đầu mối tôi cần trao đổi'],links:['hwg','bc']},
  {id:'j3',title:'CA đang làm gì & làm được gì?',prompt:'Chọn một việc thật và làm rõ trách nhiệm, đầu ra cùng phần cần phối hợp.',fields:['Một việc tôi đang phụ trách','Đầu ra cần đạt và hỗ trợ cần có'],links:['fcoc','4truc']},
  {id:'j4',title:'CA tạo giá trị thế nào?',prompt:'Từ một lần hỗ trợ gần đây hoặc dự kiến, nhìn lại điều khách nhận được và cách xác nhận điều đó.',fields:['Điều khách hàng nhận được','Tôi sẽ xác nhận giá trị đó bằng cách nào?'],links:['position','v']},
  {id:'j5',title:'CA đang cần gì & có thể phát triển thành gì?',prompt:'Chọn một năng lực cần rèn và một việc thật để luyện cùng phản hồi từ người phù hợp.',fields:['Năng lực tôi muốn rèn','Việc để luyện và người có thể phản hồi'],links:['coe','hwg']},
  {id:'j6',title:'Mình phải phục vụ CA như thế nào?',prompt:'Nếu bạn là người hỗ trợ CA, hãy xác định nhu cầu và bước phối hợp. Nếu bạn là CA, hãy ghi điều cần trao đổi với người hỗ trợ.',fields:['Nhu cầu hỗ trợ cần làm rõ','Bước phối hợp tiếp theo và người cần trao đổi'],links:['4truc','cop']}
 ]
};
