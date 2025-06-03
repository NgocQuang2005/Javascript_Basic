//Viết chương trình JavaScript để đảo ngược một chuỗi đã cho.
let strb46 = document.getElementById("strb46");
let rsb46 = document.getElementById("rsb46");
function b46() {
  let str = strb46.value.split("").reverse().join("");
  rsb46.innerText = `Result: Chuỗi đã đảo ngược: ${str}`;
  strb46.value = "";
}
