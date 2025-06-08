//Viết chương trình JavaScript để thay thế chữ số đầu tiên trong chuỗi (phải có ít nhất một chữ số) bằng ký tự $.
let rsb132 = document.getElementById("rsb132");
function b132(str) {
  let result = [];
  let strSplit = str.split("");
  for (let i = 0; i < strSplit.length; i++) {
    if (!isNaN(Number(strSplit[i]))) {
      strSplit[i] = "$";
      result.push(strSplit[i]);
    } else {
      result.push(strSplit[i]);
    }
  }
  rsb132.innerText = `Result: ${result.join("")}`;
}
b132("abc1dabc");
