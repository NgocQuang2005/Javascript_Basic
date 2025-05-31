//Write a JavaScript program to compute the sum of the two given integers. If the two values are the same, then return triple their sum.
let valueb14_nb1 = document.getElementById("valueb14_nb1");
let valueb14_nb2 = document.getElementById("valueb14_nb2");
let resultb14 = document.getElementById("rsb14");
function b14() {
  let a = valueb14_nb1.value;
  let b = valueb14_nb2.value;
  if (!isNaN(a) && !isNaN(b)) {
    if (Number(a) == Number(b)) {
      resultb14.innerText = `Result: ${(Number(a) + Number(b)) * 3}`;
      valueb14_nb1.value = "";
      valueb14_nb2.value = "";
    } else {
      resultb14.innerText = `Result: ${Number(a) + Number(b)}`;
      valueb14_nb1.value = "";
      valueb14_nb2.value = "";
    }
  } else {
    alert("Vui lòng nhập số");
    valueb14_nb1.value = "";
    valueb14_nb2.value = "";
  }
}
