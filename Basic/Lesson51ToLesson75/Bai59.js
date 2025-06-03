//Viết chương trình JavaScript để di chuyển ba ký tự cuối cùng về đầu một chuỗi nhất định. Độ dài chuỗi phải lớn hơn hoặc bằng ba.
let strb59 = document.getElementById("strb59");
let rsb59 = document.getElementById("rsb59");
function b59() {
  let str = strb59.value;
  if (str.length >= 3) {
    let start = str.slice(0, str.length - 3);
    let end = str.slice(str.length - 3, str.length);
    rsb59.innerText = `Result: ${end}${start}`;
    strb59.value = "";
  } else {
    rsb59.innerText = `Result: ${str} (trả về chuỗi gốc vì độ dài chuỗi phải lớn hơn 3)`;
    strb59.value = "";
  }
}
