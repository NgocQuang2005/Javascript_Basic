//Viết chương trình JavaScript để tính tổng lập phương của tất cả các số nguyên từ 1 đến một số nguyên cho trước.

let rsb142 = document.getElementById("rsb142");
function b142(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    let lp = Math.pow(i, 3);
    total += lp;
  }
  rsb142.innerText = `Result: ${total}`;
  //   console.log(total);
}
b142(3);
