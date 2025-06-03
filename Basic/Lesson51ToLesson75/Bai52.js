//Chương trình JavaScript này đếm số nguyên âm (a, e, i, o, u) trong một chuỗi nhất định. Nó lặp qua chuỗi, kiểm tra từng ký tự để xem đó có phải là nguyên âm không và giữ tổng số nguyên âm đã gặp.
let strb52 = document.getElementById("strb52");
let rsb52 = document.getElementById("rsb52");
function b52() {
  let str = strb52.value;
  let result = 0;
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] == "a" ||
      str[i] == "e" ||
      str[i] == "i" ||
      str[i] == "o" ||
      str[i] == "u"
    ) {
      result += 1;
    }
  }
  strb52.value = "";
  return (rsb52.innerText = `Result: Tổng là ${result} số nguyên âm`);
}
