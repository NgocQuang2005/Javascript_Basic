//Viết chương trình JavaScript để tạo một chuỗi khác từ một chuỗi đã cho với ký tự đầu tiên của chuỗi đã cho được thêm vào mặt trước và mặt sau
let strb22 = document.getElementById("strb22");
let resultb22 = document.getElementById("rsb22");
function b22() {
  let str = strb22.value;
  if (str.length >= 1) {
    resultb22.innerText = `Result: ${str.charAt(0)}${str}${str.charAt(0)}`;
    strb22.value = "";
  } else {
    alert("vui lòng nhập chuỗi dài hơn");
    strb22.value = "";
  }
}
