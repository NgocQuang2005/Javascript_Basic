//Viết chương trình JavaScript để tìm số lần thay thế một số đã cho bằng tổng các chữ số của nó. Điều này là cho đến khi nó chuyển đổi thành một số có một chữ số.
let rsb101 = document.getElementById("rsb101");
function b101(number) {
  let countSum = 0;
  while (number >= 10) {
    let numStr = number.toString().split("");
    let sum = numStr.reduce((init, value) => init + Number(value), 0);
    number = sum;
    countSum++;
  }
  rsb101.innerText = `Result: ${countSum}`;
}
b101(299);
