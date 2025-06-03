//Viết chương trình JavaScript để kiểm tra xem số 1 xuất hiện ở vị trí đầu tiên hay cuối cùng của một mảng số nguyên nhất định. Độ dài mảng phải lớn hơn hoặc bằng 1

let rsb68 = document.getElementById("rsb68");
function b68(arr) {
  rsb68.innerText = `Result: ${arr[0] == 1 || arr[arr.length - 1] == 1}`;
}
b68([1, 22, 333]);
