WEB ÔN TẬP DƯỢC LÝ - HƯỚNG DẪN CHẠY
=====================================

1. Giải nén thư mục.
2. Bấm đúp file index.html.
3. Website chạy trực tiếp bằng Chrome / Edge / Firefox, KHÔNG cần Node.js, Python hay server.

CÁC FILE
- index.html  : giao diện chính
- styles.css  : giao diện / responsive / dark mode
- data.js     : dữ liệu câu hỏi, đáp án và giải thích
- app.js      : toàn bộ chức năng học, kiểm tra, flashcard, lưu tiến độ

CHỨC NĂNG
- Ôn tập theo khoảng: ví dụ 1-20, 21-40...
- Random N câu.
- Ôn tất cả câu.
- Làm lại câu đã chọn sai.
- Ôn lại các câu đánh dấu “Chưa nhớ”.
- Chỉ học các câu chưa học.
- Kiểm tra: không hiện đáp án trước khi nộp; sau khi nộp xem điểm + giải thích từng lựa chọn.
- Flashcard: click hoặc Space để lật; phím mũi tên để đổi thẻ.
- Đánh dấu Đã học / Chưa nhớ.
- localStorage lưu tiến độ khi reload, đóng trình duyệt rồi mở lại.
- Lưu phiên đang làm để có thể tiếp tục sau khi reload.
- Dark mode.
- Xuất tiến độ dạng JSON.

LƯU Ý DỮ LIỆU
Một số câu trong đề gốc có nhiều phương án cùng đúng về mặt phân loại dược lý. Website vẫn giữ "đáp án theo đề" để bạn ôn đúng đề, đồng thời hiện cảnh báo và giải thích các phương án còn lại.

THÊM CÂU HỎI DƯỢC LÝ
Mở data.js và thêm object mới theo cấu trúc các câu đang có. Sau khi bạn gửi thêm file dữ liệu, có thể gộp tiếp các câu mới vào QUESTION_BANK.

MÔN HỌC VÀ BÀI HỌC
- Dược lý: bộ câu hỏi hiện có.
- Huyết học: Bài 1 gồm 32 mục theo thứ tự ảnh; giữ cả câu trùng ở mục 27 và 28 để đối chiếu tài liệu.
- Chọn môn và bài ở phần đầu trang. Tiến độ, câu sai, trạng thái đã học/chưa nhớ và phiên đang làm được lưu riêng theo môn và bài.
- Câu hỏi Huyết học nằm trong hematology-data.js, trong window.HEMATOLOGY_LESSONS. Khi thêm bài, thêm một mục bài mới vào mảng này với id riêng, nhãn bài và danh sách câu hỏi; sau đó chọn bài ở giao diện.
- Đáp án và giải thích Huyết học là phần phân tích trong tài liệu cung cấp, không phải đáp án chính thức của giảng viên.
