//Viết chương trình JavaScript để thay đổi cách viết hoa của tất cả các chữ cái trong một chuỗi cho trước.

let rsb145 = document.getElementById("rsb145");
function b145(str) {
  let strSplit = str.split("");
  let arrNewStr = [];
  for (let i = 0; i < strSplit.length; i++) {
    let cv = strSplit[i].charCodeAt(0);
    if (cv >= 97 && cv <= 122) {
      arrNewStr.push(strSplit[i].toUpperCase());
    } else if (cv >= 65 && cv <= 90) {
      arrNewStr.push(strSplit[i].toLowerCase());
    } else {
      arrNewStr.push(strSplit[i]);
    }
  }
  let kq = arrNewStr.join("");
  rsb145.innerText = `Result: ${kq}`;
}
b145("Germany");
