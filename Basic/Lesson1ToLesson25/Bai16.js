//Write a JavaScript program to check a pair of numbers and return true if one of the numbers is 50 or if their sum is 50.
let valueb16_nb1 = document.getElementById("valueb16_nb1");
let valueb16_nb2 = document.getElementById("valueb16_nb2");
let resultb16 = document.getElementById("rsb16");
function b16() {
  if (!isNaN(valueb16_nb1.value) && !isNaN(valueb16_nb2.value)) {
    if (
      Number(valueb16_nb1.value) == 50 ||
      Number(valueb16_nb2.value) == 50 ||
      Number(valueb16_nb1.value) + Number(valueb16_nb2.value) == 50
    ) {
      resultb16.innerText = "Result: True";
      valueb16_nb1.value = "";
      valueb16_nb2.value = "";
    } else {
      resultb16.innerText = "Result: False";
      valueb16_nb1.value = "";
      valueb16_nb2.value = "";
    }
  } else {
    alert("vui lòng nhập số");
    valueb16_nb1.value = "";
    valueb16_nb2.value = "";
  }
}
