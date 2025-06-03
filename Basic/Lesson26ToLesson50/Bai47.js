//Viết chương trình JavaScript để thay thế mọi ký tự trong một chuỗi nhất định bằng ký tự theo sau nó trong bảng chữ cái.

let strb47 = document.getElementById("strb47");
let rsb47 = document.getElementById("rsb47");
function b47() {
  let str = strb47.value;
  let kq = str
    .split("")
    .map((value) => String.fromCharCode(value.charCodeAt() + 1))
    .join("");
  rsb47.innerText = `Chuỗi đã sửa: ${kq}`;
  strb47.value = "";
}
