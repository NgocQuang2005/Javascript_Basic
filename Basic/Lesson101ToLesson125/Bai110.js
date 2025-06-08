//Viết chương trình JavaScript để kiểm tra xem một chuỗi đã cho có đại diện cho một câu đúng hay không. Một chuỗi được coi là câu đúng nếu nó bắt đầu bằng chữ in hoa và kết thúc bằng dấu chấm (.)
let rsb110 = document.getElementById("rsb110");
let strb110 = document.getElementById("strb110");
function b110() {
  let str = strb110.value.trim();
  let firstStr = str.charAt(0);
  let endStr = str.charAt(str.length - 1);
  if (firstStr >= "A" && firstStr <= "Z" && endStr === ".") {
    rsb110.innerText = "Result: Đúng";
    strb110.value = "";
  } else {
    rsb110.innerText = "Result: Không đúng";
    strb110.value = "";
  }
}
