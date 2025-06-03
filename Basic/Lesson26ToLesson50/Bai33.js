//Viết chương trình kiểm tra xem ký tự xác định có tồn tại giữa vị trí thứ 2 và thứ 4 trong một chuỗi cho trước hay không.
let strb33 = document.getElementById("strb33");
let char33 = document.getElementById("char33");
let rsb33 = document.getElementById("rsb33");
function b33() {
  let str = strb33.value;
  let char = char33.value;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) == char && i >= 1 && i <= 3) {
      rsb33.innerText = "Result: True";
      strb33.value = "";
      char33.value = "";
      break;
    } else {
      rsb33.innerText = "Result: False";
      strb33.value = "";
      char33.value = "";
    }
  }
}
