//Viết chương trình JavaScript để tìm sự khác biệt lớn nhất giữa tất cả các cặp có thể có của một mảng số nguyên cho trước
let rsb90 = document.getElementById("rsb90");
function b90(arr) {
  let kq = 0;
  for (let i = 0; i < arr.length; i++) {
    for (j = 0; j !== i && j < arr.length; j++) {
      let abs = Math.abs(arr[i] - arr[j]);
      if (abs > kq) {
        kq = abs;
      }
    }
  }
  rsb90.innerText = `Result: ${kq}`;
}
b90([1, 2, 3, 18, 9]);
