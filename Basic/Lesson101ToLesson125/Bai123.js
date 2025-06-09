//Viết chương trình JavaScript để đảo ngược thứ tự các bit trong một số nguyên.
let rsb123 = document.getElementById("rsb123");
function b123(num) {
  let binaryStr = num.toString(2);
  let x = "";
  //chuyển đổi thành 8 bit;{}
  for (let i = 0; i < 8 - binaryStr.length; i++) {
    x += "0";
  }
  let strBit = x + binaryStr;
  let reverse = strBit.split("").reverse().join("");
  let cvNum = parseInt(reverse, 2);
  rsb123.innerText = `Result: ${cvNum}`;
}
b123(14);
