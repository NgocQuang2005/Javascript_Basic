//Viết chương trình JavaScript để sắp xếp một mảng gồm tất cả các số nguyên tố từ 1 đến một số nguyên nhất định.
let rsb105 = document.getElementById("rsb105");
function b105(n) {
  if (n <= 1) {
    rsb105.innerText = "Result: n không hợp lệ";
    return;
  }
  let kq = [];
  for (let i = 2; i <= n; i++) {
    if (i == 2 || i == 3) {
      kq.push(i);
    } else if (i % 2 !== 0 && i % 3 !== 0) {
      kq.push(i);
    }
  }
  rsb105.innerText = `Result: [${kq}]`;
}
b105(19);
