//Viết chương trình JavaScript để chuyển đổi các chữ cái của một chuỗi cho trước theo thứ tự bảng chữ cái.
let strb50 = document.getElementById("strb50");
let rsb50 = document.getElementById("rsb50");
function b50() {
  let str = strb50.value;
  let kq = str.split("").sort().join("");
  rsb50.innerText = `Chuỗi đã sửa: ${kq}`;
  strb50.value = "";
}
