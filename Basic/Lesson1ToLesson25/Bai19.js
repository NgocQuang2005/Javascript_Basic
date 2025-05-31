//Viết chương trình JavaScript để tạo một chuỗi khác bằng cách thêm "Py" vào trước một chuỗi nhất định. Nếuchuỗi đã cho bắt đầu bằng "Py" thì trả về chuỗi gốc..
let strb19 = document.getElementById("strb19");
let resultb19 = document.getElementById("rsb19");
function b19() {
  let str = strb19.value;
  if (str.substring(0, 2) === "Py") {
    resultb19.innerText = `Result: ${str}`;
    strb19.value = "";
  } else {
    resultb19.innerText = `Result: Py${str}`;
    strb19.value = "";
  }
}
