WEB ÔN TẬP DƯỢC LÝ & BỆNH HỌC - HƯỚNG DẪN
================================================

CÁCH CHẠY TRÊN MÁY
1. Giải nén thư mục.
2. Bấm đúp file index.html.
3. Website chạy trực tiếp bằng Chrome / Edge / Firefox, không cần Node.js, Python hay server.

CÁCH CHẠY TRÊN GITHUB PAGES
- Upload toàn bộ các file trong thư mục này lên thư mục gốc của repository.
- Trong GitHub: Settings -> Pages -> Deploy from a branch -> main -> /(root) -> Save.

CÁC FILE
- index.html          : giao diện chính
- styles.css          : giao diện / responsive / dark mode
- app.js              : chức năng đa môn, ôn tập, kiểm tra, flashcard, lưu tiến độ
- data.js             : 156 câu Dược lý
- pathology-data.js   : 160 câu Bệnh học

MÔN HỌC
1. Dược lý: 156 câu từ 2 tài liệu Dược lý đã cung cấp trước đó.
2. Bệnh học: 160 câu.
   - Câu 1-135: trích từ BỆNH HỌC.docx. Đáp án lấy theo phương án được in đậm trong tài liệu.
   - Câu 136-160: các câu bổ sung từ đề CamScanner, ưu tiên các câu không bị trùng rõ ràng với ngân hàng Word. Đáp án theo phương án được đánh dấu trên bản scan.
   - Một ca viêm loét dạ dày bị đánh dấu đáp án không thống nhất giữa các bản scan nên không thêm thành câu mới để tránh học sai.

CHỨC NĂNG
- Chọn MÔN HỌC trước khi học: Dược lý hoặc Bệnh học.
- Với Bệnh học có thể lọc thêm theo chủ đề.
- Ôn tập theo khoảng câu, random, tất cả, câu sai, câu chưa nhớ, câu chưa học.
- Kiểm tra: không hiện đáp án cho đến khi nộp; sau khi nộp xem điểm + đáp án + giải thích.
- Flashcard: click hoặc Space để lật; đánh dấu Đã học / Chưa nhớ.
- Làm lại các câu chọn sai ở tất cả chế độ phù hợp.
- Tiến độ được lưu riêng cho từng môn bằng localStorage.
- Tự động chuyển tiến độ Dược lý từ bản cũ (duocLiStudy.v2) sang bản đa môn khi có thể.
- Dark mode và xuất tiến độ JSON.

LƯU Ý VỀ ĐÁP ÁN / GIẢI THÍCH
- Dược lý: giữ nguyên cách phân biệt “đáp án theo đề” và “đáp án bổ sung” của bản 156 câu.
- Bệnh học Word: đáp án dựa trên chữ in đậm trong tài liệu nguồn. Phần giải thích được thêm để hỗ trợ ôn tập và luôn ghi rõ nguồn đáp án.
- Bệnh học scan: đáp án dựa trên phương án được đánh dấu trên ảnh scan. Những câu có khả năng gây nhầm được ghi chú trong web.
