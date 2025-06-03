//Chương trình JavaScript này lấy một chuỗi ký tự đầu vào có số ký tự chẵn và trả về một chuỗi mới chỉ chứa một nửa đầu của chuỗi ban đầu.
let strb57 = document.getElementById("strb57");
let rsb57 = document.getElementById("rsb57");
function b57() {
  let str = strb57.value;
  if (str.length % 2 == 0) {
    let kq = str.slice(0, 5);
    rsb57.innerText = `Result: ${kq}`;
    strb57.value = "";
  } else {
    rsb57.innerText = `Result: ${str} (trả về chuỗi gốc vì độ dài chuỗi không phải số chẵn)`;
    strb57.value = "";
  }
}
