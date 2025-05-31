//kiểm tra nằm nhuận
let textElmb5 = document.getElementById("Leap");
let inputValue = document.getElementById("namnhuan");
function leapYear() {
  if (!isNaN(inputValue.value)) {
    if (
      (Number(inputValue.value) % 4 == 0 &&
        Number(inputValue.value) % 100 != 0) ||
      Number(inputValue.value) % 400 == 0
    ) {
      textElmb5.innerText = `Result: Năm ${Number(
        inputValue.value
      )} là năm nhuận`;
      inputValue.value = "";
    } else {
      textElmb5.innerText = `Result: Năm ${Number(
        inputValue.value
      )} không phải là năm nhuận`;
      inputValue.value = "";
    }
  } else {
    alert("vui lòng nhập vào ô input là năm");
    inputValue.value = "";
  }
}
