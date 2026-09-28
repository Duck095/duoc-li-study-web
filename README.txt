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

DỮ LIỆU
- Tổng cộng: 156 câu từ 2 file Word.
- Câu 1-40: lấy từ file đề đã có đáp án; website giữ nguyên đáp án theo đề.
- Câu 41-156: lấy từ file “CÂU HỎI ÔN TẬP DƯỢC LÝ”; file này có 116 câu thực tế (đánh số 1-117 nhưng thiếu câu 58) và không kèm đáp án.
- Với 116 câu của file 2, đáp án và giải thích được bổ sung theo kiến thức dược lý; giao diện ghi rõ “Đáp án bổ sung”.
- Những câu mơ hồ, có lỗi đánh máy hoặc có hơn một lựa chọn hợp lý được gắn cảnh báo riêng.
- Mỗi câu đều có giải thích cho cả 4 phương án A/B/C/D.

LƯU Ý DỮ LIỆU
Một số câu trong đề gốc có nhiều phương án cùng đúng về mặt phân loại dược lý. Website giữ đáp án của file 1, đồng thời hiện cảnh báo và giải thích các phương án còn lại.

THÊM CÂU HỎI
Mở data.js và thêm object mới theo cấu trúc các câu đang có. Sau khi bạn gửi thêm file dữ liệu, có thể gộp tiếp các câu mới vào QUESTION_BANK.
