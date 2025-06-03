//Chương trình JavaScript này nối hai chuỗi và nếu độ dài của chúng khác nhau, nó sẽ cắt bớt chuỗi dài hơn để khớp với độ dài của chuỗi ngắn hơn trước khi nối.
let strb61a = document.getElementById("strb61a");
let strb61b = document.getElementById("strb61b");
let rsb61 = document.getElementById("rsb61");
function b61() {
  let stra = strb61a.value;
  let strb = strb61b.value;
  if (stra.length === strb.length) {
    rsb61.innerText = `Result: ${stra}${strb}`;
    strb61a.value = "";
    strb61b.value = "";
  }
  if (stra.length > strb.length) {
    stra = stra.slice(stra.length - strb.length, stra.length);
    rsb61.innerText = `Result: ${stra}${strb}`;
    strb61a.value = "";
    strb61b.value = "";
  }
  if (stra.length < strb.length) {
    strb = strb.slice(strb.length - stra.length, strb.length);
    rsb61.innerText = `Result: ${stra}${strb}`;
    strb61a.value = "";
    strb61b.value = "";
  }
}
