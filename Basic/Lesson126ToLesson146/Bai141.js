//Viết chương trình JavaScript để tìm số nguyên n lớn nhất sao cho 1 + 2 + ... + n <= một số nguyên cho trước.

let rsb141 = document.getElementById("rsb141");
function b141(x) {
  let result = Math.floor((-1 + Math.sqrt(1 + 8 * x)) / 2);
  rsb141.innerText = `Result: ${result}`;
}
b141(100);
