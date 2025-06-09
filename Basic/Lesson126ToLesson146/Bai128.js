//Viết chương trình JavaScript để tìm tất cả các thừa số nguyên tố riêng biệt của một số nguyên cho trước.
let rsb128 = document.getElementById("rsb128");
function checkSnt(n) {
  if (n < 2) return false;
  for (let i = 2; i <= n - 1; i++) {
    if (n % i === 0) return false;
  }
  return true;
}
function b128(number) {
  let result = [];
  for (let i = 2; i < number; i++) {
    //kiểm tra số nguyên tố
    if (i === 2 || i === 3 || (i % 2 !== 0 && i % 3 !== 0 && checkSnt(i))) {
      if (number % i === 0) {
        result.push(i);
      }
    }
  }
  console.log(result);
}
b128(100);
