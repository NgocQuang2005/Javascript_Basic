//Viết chương trình JavaScript để tính tổng của n + n/2 + n/4 + n/8 + .... trong đó n là số nguyên dương và tất cả các phép chia đều là số nguyên.
let rsb109 = document.getElementById("rsb109");
let numberb109 = document.getElementById("numberb109");
function b109() {
  let number = Number(numberb109.value);
  if (!isNaN(number)) {
    let sum = 0;
    while (number > 0) {
      sum += number;
      number = Math.floor(number / 2);
    }
    rsb109.innerText = `Result: ${sum}`;
    numberb109.value = "";
  } else {
    alert("vui lòng nhập vào 1 số");
    numberb109.value = "";
  }
}
