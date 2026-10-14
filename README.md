# BÁO CÁO PHÂN TÍCH KỸ THUẬT: TRADE-OFF GIỮA DOT NOTATION VÀ BRACKET NOTATION TRONG TRUY XUẤT ĐỐI TƯỢNG JAVASCRIPT

> 👤 **Học viên:** Hoàng Công Dũng | **Mã SV:** PTIT-HCM-009
> 🏫 **Môn học:** it103b-rl-HoangCongDung

---

## 📊 Sơ đồ thiết kế hệ thống (Flowchart)

> 💡 *Sơ đồ dưới đây được render tự động trực tiếp trên GitHub bằng Mermaid. Bạn cũng có thể tải file **`bt4.drawio`** trong repository này để mở và chỉnh sửa trực tiếp trên [Draw.io (diagrams.net)](https://app.diagrams.net).* 

```mermaid
graph TD
  Start([Bắt đầu truy xuất đối tượng]) --> CheckKey{Kiểm tra đặc điểm của Key}
   CheckKey -- Key là chuỗi tĩnh, hợp lệ & biết trước --> Dot[Sử dụng Dot Notation: obj.prop]
   CheckKey -- Key chứa dấu cách, gạch ngang hoặc là biến động --> Bracket[Sử dụng Bracket Notation: obj[expr]]
  Dot --> Success([Truy xuất thành công])
  Bracket --> Success
```

---

## 1. Mục tiêu và Bối cảnh bài toán

Trong quá trình phát triển ứng dụng quản lý khách sạn (PMS), việc thao tác với các đối tượng dữ liệu (Object) diễn ra liên tục. Tuy nhiên, việc sử dụng tùy tiện hoặc nhầm lẫn giữa Dot Notation (obj.prop) và Bracket Notation (obj['prop']) thường dẫn đến các lỗi ngầm như 'undefined' hoặc 'SyntaxError' rất khó debug.

Tài liệu kỹ thuật này thực hiện phân tích trade-off chuyên sâu, thiết lập bảng đối chiếu chuẩn mực và đưa ra các quy tắc Clean Code nhằm chuẩn hóa mã nguồn cho toàn bộ đội ngũ phát triển.

- Làm rõ bản chất kỹ thuật và phạm vi ứng dụng của hai cơ chế truy xuất đối tượng trong JavaScript.
- Xây dựng quy tắc Clean Code cụ thể cho từng trường hợp nghiệp vụ trong hệ thống PMS.

## 2. Phân tích Bảng đối chiếu Trade-off Kỹ thuật

Dựa trên các thử nghiệm thực tế trên môi trường V8 Engine, dưới đây là bảng tổng hợp các tiêu chí đánh giá trade-off giữa Dot Notation và Bracket Notation:

| Tiêu chuẩn | Dot Notation (obj.prop) | Bracket Notation (obj[expr]) |
| --- | --- | --- |
| Tính thuận tiện & Thẩm mỹ | Ngắn gọn, trực quan, hỗ trợ IDE Autocomplete tốt | Dài hơn, cần dấu ngoặc vuông và nháy |
| Truy cập qua biến động | Không hỗ trợ (chỉ tìm chuỗi cố định) | Rất mạnh (đánh giá mọi biểu thức JS) |
| Tên key có ký tự đặc biệt | Lỗi cú pháp (Ví dụ: obj.check-in, obj.123) | Hỗ trợ trọn vẹn (Ví dụ: obj['check-in'], obj['123']) |
| Khuyến nghị sử dụng | Dùng mặc định cho các thuộc tính tĩnh | Bắt buộc dùng cho biến động và dynamic key |

## 3. Quy tắc nghiệp vụ và Xử lý Bẫy dữ liệu

Trong dự án PMS khách sạn, dữ liệu đặt phòng thường chứa các định dạng phức tạp như mã phòng có dấu gạch ngang ('room-101') hoặc các trường thông tin động được trích xuất từ form người dùng. Việc áp dụng sai cú pháp sẽ làm crash ứng dụng ngay lập tức.

- Quy tắc 1: Luôn sử dụng Bracket Notation khi làm việc với các thuộc tính chứa dấu gạch ngang, dấu cách hoặc bắt đầu bằng số (Ví dụ: 'room-status', 'total price').
- Quy tắc 2: Tận dụng Bracket Notation để truy xuất thuộc tính thông qua biến động trong các vòng lặp cấu hình động.
- Bẫy dữ liệu: Tuyệt đối không dùng Dot Notation khi tên thuộc tính được lưu trong một biến số (Ví dụ: 'let key = name; obj.key;' sẽ tìm kiếm key mang tên 'key' thay vì giá trị của biến 'name').

## 4. Đánh giá sơ đồ thiết kế và Hướng dẫn mở trên Draw.io

Sơ đồ luồng quyết định (Flowchart) minh họa trực quan quá trình lựa chọn giữa hai cú pháp dựa trên đặc tính của Key.

Toàn bộ tài liệu và mã nguồn kiểm thử đã được đóng gói chuẩn chỉnh, sẵn sàng nộp lên kho lưu trữ GitHub Organization 'it103b-rl-HoangCongDung'.

---

## 📁 Danh sách tệp tin nộp bài trong Repository
- 📝 `bt4.docx`: Báo cáo tài liệu phân tích nghiệp vụ hoàn chỉnh.
- 🎨 `bt4.drawio`: File thiết kế sơ đồ chuẩn theo quy định đề bài (mở trực tiếp bằng [Draw.io](https://app.diagrams.net) hoặc Lucidchart).
- 💻 `solution_ex10.js`: Mã nguồn chương trình.
