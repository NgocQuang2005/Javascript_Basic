//Viết chương trình JavaScript để thay thế từng ký tự trong một chuỗi nhất định bằng ký tự tiếp theo trong bảng chữ cái tiếng Anh.  Lưu ý: 'a' sẽ được thay thế bằng 'b' hoặc 'z' sẽ được thay thế bằng 'a'.
let rsb81 = document.getElementById("rsb81");
function b81(str) {
  let kq = str
    .split("")
    .map((value) => String.fromCharCode(value.charCodeAt() + 1))
    .join("");
  //   console.log(kq);
  rsb81.innerText = `Result: ${kq}`;
}
b81("acbdas");
