//Viết chương trình JavaScript để tạo một chuỗi mới sử dụng n ký tự đầu tiên và cuối cùng của một chuỗi nhất định. Độ dài chuỗi phải lớn hơn hoặc bằng n.
let strb65 = document.getElementById("strb65");
let nb65 = document.getElementById("nb65");
let rsb65 = document.getElementById("rsb65");
function b65() {
  let str = strb65.value;
  let n = Number(nb65.value);
  if (isNaN(n)) {
    alert("kí tự phải là số");
    nb65.value = "";
  }
  if (str.length >= n) {
    let startStr = str.slice(0, n);
    let endStr = str.slice(str.length - n, str.length);
    rsb65.innerText = `Result: ${startStr}${endStr}`;
    strb65.value = "";
    nb65.value = "";
  } else {
    alert("số kí tự phải lớn hơn n");
    strb65.value = "";
  }
}
