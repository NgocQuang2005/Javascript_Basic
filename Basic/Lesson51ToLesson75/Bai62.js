//Viết chương trình JavaScript để kiểm tra xem một chuỗi có kết thúc bằng "Script" hay không. Độ dài chuỗi phải lớn hơn hoặc bằng 6.

let strb62 = document.getElementById("strb62");
let rsb62 = document.getElementById("rsb62");
function b62() {
  let str = strb62.value;
  if (str.length >= 6 && str.endsWith("Script")) {
    rsb62.innerText = "Result: True";
    strb62.value = "";
  } else {
    rsb62.innerText = "Result: False";
    strb62.value = "";
  }
}
