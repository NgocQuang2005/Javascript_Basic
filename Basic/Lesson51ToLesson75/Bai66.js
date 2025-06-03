//Viết chương trình JavaScript để tính tổng ba phần tử của một mảng số nguyên có độ dài 3 cho trước.

let rsb66 = document.getElementById("rsb66");
function b66(arr) {
  let kq = arr.reduce((init, value) => init + value);
  rsb66.innerText = `Result: Tổng ${kq}`;
}
b66([111, 22, 333]);
