//Viết chương trình JavaScript để kiểm tra xem các ký tự a và b có cách nhau đúng 3 vị trí ở bất kỳ đâu (ít nhất một lần) trong một chuỗi nhất định hay không.
let strb51 = document.getElementById("strb51");
let rsb51 = document.getElementById("rsb51");
function b51() {
  let str = strb51.value;
  for (let i = 0; i < str.length - 4; i++) {
    if (
      (str[i] === "a" && str[i + 4] === "b") ||
      (str[i] === "b" && str[i + 4] === "a")
    ) {
      rsb51.innerText = `Result: True`;
      strb51.value = "";
      break;
    }
    rsb51.innerText = `Result: False`;
    strb51.value = "";
  }
}
