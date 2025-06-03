//Viết chương trình JavaScript để cộng hai chữ số vào một số nguyên dương có độ dài bằng hai cho trước.
let rsb78 = document.getElementById("rsb78");
function b88(number) {
  let kq = String(number)
    .split("")
    .reduce((init, value) => init + Number(value), 0);
  rsb78.innerText = `Result: ${kq}`;
}
b88(26);
