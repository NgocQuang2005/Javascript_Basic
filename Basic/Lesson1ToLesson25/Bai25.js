//Kiểm tra xem chuỗi có bắt đầu bằng 'Java' không
let strb25 = document.getElementById("strb25");
let resultb25 = document.getElementById("rsb25");
function b25() {
  let str = strb25.value;
  if (str.startsWith("Java")) {
    resultb25.innerText = "Result: True";
    strb25.value = "";
  } else {
    resultb25.innerText = "Result: False";
    strb25.value = "";
  }
}
