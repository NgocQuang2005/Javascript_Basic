//Viết chương trình JavaScript để tìm số nguyên tố nhỏ nhất lớn hơn một số cho trước.
// là tìm số nguyên tố sau nó
let rsb125 = document.getElementById("rsb125");
function b125(num) {
  let result = 0;
  for (let i = num + 1; i++; ) {
    if (i % 2 !== 0 && i % 3 !== 0) {
      result = i;
      break;
    }
  }
  rsb125.innerText = `Result: ${result}`;
}
b125(17);
