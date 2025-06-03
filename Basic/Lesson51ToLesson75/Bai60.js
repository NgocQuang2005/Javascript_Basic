//Viết chương trình JavaScript để tạo một chuỗi sử dụng ba ký tự ở giữa của một chuỗi có độ dài lẻ cho trước. Độ dài chuỗi phải lớn hơn hoặc bằng ba.
let strb60 = document.getElementById("strb60");
let rsb60 = document.getElementById("rsb60");
function b60() {
  let str = strb60.value;
  if (str.length % 2 !== 0 && str.length >= 3) {
    let center = str.length + 1;
    rsb60.innerText = `Result: ${str.slice(center - 2, center + 1)}`;
    strb60.value = "";
  } else {
    rsb60.innerText = `Result: ${str} (trả về chuỗi gốc vì độ dài chuỗi phải lớn hơn 3)`;
    strb60.value = "";
  }
}
