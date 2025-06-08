//Viết chương trình JavaScript để xóa tất cả các ký tự khỏi một chuỗi nhất định xuất hiện nhiều lần.
let rsb131 = document.getElementById("rsb131");
function b131(str) {
  let newArr = [];
  let strSplit = str.split("");
  for (let i = 0; i < strSplit.length; i++) {
    if (str.indexOf(strSplit[i]) === str.lastIndexOf(strSplit[i])) {
      newArr.push(strSplit[i]);
    }
  }
  rsb131.innerText = `Result: ${newArr.join("")}`;
}
b131("1365451");
