//Viết chương trình JavaScript để xoay các phần tử bên trái trong một mảng số nguyên có độ dài 3.

let rsb67 = document.getElementById("rsb67");
function b67(arr) {
  let kq = [arr[1], arr[2], arr[0]];
  rsb67.innerText = `Result: Tổng ${kq}`;
}
b67([111, 22, 333]);
