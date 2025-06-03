//Viết chương trình JavaScript để nối hai chuỗi ngoại trừ ký tự đầu tiên của chúng.
let strb58a = document.getElementById("strb58a");
let strb58b = document.getElementById("strb58b");
let rsb58 = document.getElementById("rsb58");
function b58() {
  let stra = strb58a.value.slice(1);
  let strb = strb58b.value.slice(1);
  rsb58.innerText = `Result: ${stra}${strb}`;
  strb58a.value = "";
  strb58b.value = "";
}
