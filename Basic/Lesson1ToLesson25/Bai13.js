//Write a JavaScript program to get the difference between a given number and 13, if the number is broader than 13 return double the absolute difference.
let resultb13 = document.getElementById("rsb13");
let valueb13 = document.getElementById("numberB13");
function b13() {
  if (!isNaN(valueb13.value)) {
    if (Number(valueb13.value) <= 13) {
      resultb13.innerText = `Result: ${13 - Number(valueb13.value)}`;
      valueb13.value = "";
    } else {
      resultb13.innerText = `Result: ${(Number(valueb13.value) - 13) * 2}`;
      valueb13.value = "";
    }
  } else {
    alert("Vui lòng nhập số");
    valueb13.value = "";
  }
}
