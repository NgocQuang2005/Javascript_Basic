//Viết chương trình JavaScript để kiểm tra xem tất cả các chữ số trong một số đã cho có giống nhau hay không.
let rsb136 = document.getElementById("rsb136");
let numberb136 = document.getElementById("numberb136");

function b136() {
  let num = Number(numberb136.value);
  if (!isNaN(num)) {
    let arrNum = num.toString().split("");
    for (let i = 0; i < arrNum.length - 1; i++) {
      if (Number(arrNum[i]) !== Number(arrNum[i + 1])) {
        rsb136.innerText = "Result: Không bằng";
        numberb136.value = "";

        return;
      }
      rsb136.innerText = "Result: Ok nhé";
      numberb136.value = "";
    }
  } else {
    alert("Vui lòng nhập vào 1 số");
    numberb136.value = "";
  }
}
