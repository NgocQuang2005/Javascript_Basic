//Viết chương trình JavaScript để tạo một chuỗi mới từ một chuỗi đã cho bằng cách thay đổi vị trí của ký tự đầu tiên và cuối cùng. Độ dài chuỗi phải rộng hơn hoặc bằng 1.
let strb21 = document.getElementById("strb21");
let resultb21 = document.getElementById("rsb21");
function b21() {
  let str = strb21.value;
  if (str.length >= 1) {
    mid = str.substring(1, str.length - 1);
    console.log(mid);
    resultb21.innerText = `Result: ${
      str.charAt(str.length - 1) + mid + str.charAt(0)
    } `;
  } else {
    alert("vui lòng nhập chuỗi dài hơn");
    strb21.value = "";
  }
}
