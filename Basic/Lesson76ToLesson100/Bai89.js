//Viết chương trình JavaScript để tìm sự khác biệt lớn nhất giữa hai phần tử liền kề bất kỳ của một mảng số nguyên cho trước.
let rsb89 = document.getElementById("rsb89");
function b89(arr) {
  let kq = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    let abs = Math.abs(arr[i] - arr[i + 1]);
    if (abs > kq) {
      kq = abs;
    }
  }
  rsb89.innerText = `Result: ${kq}`;
}
b89([2, 4, 5, 1, 6, 1]);
