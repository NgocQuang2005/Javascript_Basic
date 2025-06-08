//Viết chương trình JavaScript để thay đổi các ký tự (chữ thường) trong chuỗi trong đó a biến thành z, b biến thành y, c biến thành x, ..., n biến thành m, m biến thành n, ..., z biến thành a.
let rsb130 = document.getElementById("rsb130");
function b130(str) {
  let sumAZ = "a".charCodeAt(0) + "z".charCodeAt(0);
  let result = [];
  let strSplit = str.split("");
  for (let i = 0; i < strSplit.length; i++) {
    let cd = strSplit[i].charCodeAt(0);
    result.push(String.fromCharCode(sumAZ - cd));
  }
  rsb130.innerText = `Result: ${result.join("")}`;
}
b130("abcde");
