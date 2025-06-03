//Viết chương trình JavaScript để viết hoa chữ cái đầu tiên của mỗi từ trong một chuỗi cho trước.
let strb48 = document.getElementById("strb48");
let rsb48 = document.getElementById("rsb48");
function b48() {
  let str = strb48.value;
  let kq = str
    .split(" ")
    .map((value) => value.charAt(0).toUpperCase() + value.slice(1))
    .join(" ");
  rsb48.innerText = `Chuỗi đã sửa: ${kq}`;
  strb48.value = "";
}
