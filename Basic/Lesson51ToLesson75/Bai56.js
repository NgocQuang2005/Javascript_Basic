//Viết chương trình JavaScript để tạo một chuỗi cập nhật gồm 4 bản sao của 3 ký tự cuối cùng của chuỗi gốc đã cho. Độ dài chuỗi phải từ 3 trở lên
let strb56 = document.getElementById("strb56");
let rsb56 = document.getElementById("rsb56");
function b56() {
  let str = strb56.value;
  if (str.length > 3) {
    let kq = str.slice(str.length - 3, str.length).repeat(4);
    rsb56.innerText = `Result: ${kq}`;
    strb56.value = "";
  } else {
    alert("vui lòng nhập chuỗi dài hơn 3 kí tự");
    strb56.value = "";
  }
}
