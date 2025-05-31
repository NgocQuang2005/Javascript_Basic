//Thêm 3 ký tự cuối vào mặt trước và mặt sau của chuỗi
let strb24 = document.getElementById("strb24");
let resultb24 = document.getElementById("rsb24");
function b24() {
  let str = strb24.value;
  let end = str.slice(str.length - 3, str.length);
  resultb24.innerText = `Result: ${end}${str}${end}  `;
}
