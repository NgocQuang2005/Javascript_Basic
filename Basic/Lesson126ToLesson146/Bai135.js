//Viết chương trình JavaScript để tìm vị trí của số tròn ngoài cùng bên phải trong một mảng số nguyên. Nếu không có số làm tròn, hàm trả về 0.
let rsb135 = document.getElementById("rsb135");
function b135(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 10 === 0) {
      result.push(i);
    }
  }
  if (result.length === 0) {
    rsb135.innerText = "Result: 0";
    return;
  }
  rsb135.innerText = `Result: ${result}`;
}
b135([1, 22, 30, 54, 56]);
