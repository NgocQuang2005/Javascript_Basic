//Viết chương trình JavaScript để kiểm tra xem một số nguyên đã cho có nằm trong khoảng 20 của 100 hay 400 hay không.
let numberB17 = document.getElementById("numberB17");
let resultb17 = document.getElementById("rsb17");
function b17() {
  if (!isNaN(numberB17.value)) {
    if (
      Math.abs(100 - Number(numberB17.value)) <= 20 ||
      Math.abs(400 - Number(numberB17.value)) <= 20
    ) {
      resultb17.innerText = "Result: True";
      numberB17.value = "";
    } else {
      resultb17.innerText = "Result: False";
      numberB17.value = "";
    }
  } else {
    alert("Vui lòng nhập số");
    numberB17.value = "";
  }
}
