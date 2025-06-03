//Viết chương trình JavaScript để kiểm tra xem một chuỗi đã cho có chứa số p và t bằng nhau hay không.
let strb53 = document.getElementById("strb53");
let rsb53 = document.getElementById("rsb53");
function b53() {
  let str = strb53.value;
  let resultP = 0;
  let resultT = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == "p") {
      resultP += 1;
    }
    if (str[i] == "t") {
      resultT += 1;
    }
  }
  if (resultP === resultT) {
    rsb53.innerText = "Result: True";
    strb53.value = "";
  } else {
    rsb53.innerText = "Result: False";
    strb53.value = "";
  }
}
