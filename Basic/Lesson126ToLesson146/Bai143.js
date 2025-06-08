//Viết chương trình JavaScript để tính tổng của tất cả các chữ số xuất hiện trong một chuỗi cho trước.

let rsb143 = document.getElementById("rsb143");
function b143(str) {
  let strSplit = str.split("");
  let arrNum = [];
  for (let i = 0; i < strSplit.length; i++) {
    if (!isNaN(Number(strSplit[i]))) {
      arrNum.push(Number(strSplit[i]));
    }
  }
  let result = arrNum.reduce((init, value) => value + init);
  rsb143.innerText = `Result: ${result}`;
}
b143("abcd12efg9");
