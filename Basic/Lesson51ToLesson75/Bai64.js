//Viết chương trình JavaScript để tạo một chuỗi mới từ một chuỗi đã cho. Chương trình này loại bỏ ký tự đầu tiên và cuối cùng của chuỗi nếu ký tự đầu tiên hoặc cuối cùng là 'P'. Trả về chuỗi gốc nếu điều kiện không được thỏa mãn.
let strb64 = document.getElementById("strb64");
let rsb64 = document.getElementById("rsb64");
function b64() {
  let str = strb64.value;
  if (str.startsWith("P") || str.startsWith("P")) {
    rsb64.innerText = `Result: ${str.slice(1, str.length - 1)}`;
    strb64.value = "";
  } else {
    rsb64.innerText = `Result: ${str}`;
    strb64.value = "";
  }
}
