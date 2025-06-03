//Viết chương trình JavaScript để hiển thị tên thành phố nếu chuỗi bắt đầu bằng "Los" hoặc "New" nếu không thì trả về trống.
let strb63 = document.getElementById("strb63");
let rsb63 = document.getElementById("rsb63");
function b63() {
  let str = strb63.value;
  if (str.startsWith("New") || str.startsWith("Los")) {
    rsb63.innerText = `Result: ${str}`;
    strb63.value = "";
  } else {
    rsb63.innerText = "Result: ...";
    strb63.value = "";
  }
}
