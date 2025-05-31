//Write a JavaScript program to compute the absolute difference between a specified number and 19. Returns triple the absolute difference if the specified number is greater than 19.
let resultb15 = document.getElementById("rsb15");
let valueb15 = document.getElementById("numberB15");
function b15() {
  if (!isNaN(valueb15.value)) {
    if (Number(valueb15.value) <= 19) {
      resultb15.innerText = `Result: ${15 - Number(valueb15.value)}`;
      valueb15.value = "";
    } else {
      resultb15.innerText = `Result: ${(Number(valueb15.value) - 19) * 3}`;
      valueb15.value = "";
    }
  } else {
    alert("Vui lòng nhập số");
    valueb15.value = "";
  }
}
