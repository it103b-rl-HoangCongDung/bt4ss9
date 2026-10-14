/**
 * Bài tập: Bài 4 - Session 9: Phân tích Trade-off Dot Notation vs Bracket Notation
 * Môn học: [RL-IT103B-K25] - Xây dựng ứng dụng web với Javascript
 * GitHub Organization: it103b-rl-HoangCongDung
 */

const hotelRoom = {
  'room-number': 'A-204',
  'check-in': '2023-11-10',
  'room-status': 'Occupied',
  pricePerNight: 1200000,
  guest: 'Nguyen Van A'
};

// Trường hợp 1: Truy cập qua biến động (Dynamic Key)
console.log('--- 1. Truy cập qua biến động ---');
const dynamicKey = 'pricePerNight';
// Sai: console.log(hotelRoom.dynamicKey); // Kết quả: undefined
// Đúng:
console.log('Giá phòng (dùng Bracket):', hotelRoom[dynamicKey]);

// Trường hợp 2: Key chứa ký tự đặc biệt hoặc dấu gạch ngang
console.log('\n--- 2. Key chứa ký tự đặc biệt / gạch ngang ---');
// Sai: console.log(hotelRoom.room-status); // Lỗi cú pháp SyntaxError
// Đúng:
console.log('Trạng thái phòng:', hotelRoom['room-status']);
console.log('Số phòng:', hotelRoom['room-number']);

// Trường hợp 3: Lặp qua đối tượng sử dụng vòng lặp for...in
console.log('\n--- 3. Lặp qua đối tượng với for...in ---');
for (let key in hotelRoom) {
  if (Object.prototype.hasOwnProperty.call(hotelRoom, key)) {
    // Bắt buộc dùng Bracket Notation vì key là một biến động trong vòng lặp
    console.log(`Thuộc tính '${key}' có giá trị:`, hotelRoom[key]);
  }
}
