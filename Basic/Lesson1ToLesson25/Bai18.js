//Viết chương trình JavaScript để kiểm tra hai số nguyên đã cho xem một số nguyên dương và số còn lại âm.
let valueb18_nb1 = document.getElementById("valueb18_nb1");
let valueb18_nb2 = document.getElementById("valueb18_nb2");
let resultb18 = document.getElementById("rsb18");
function b18() {
  if (!isNaN(valueb18_nb1.value, valueb18_nb2.value)) {
    if (
      (Number(valueb18_nb1.value) > 0 && Number(valueb18_nb2.value) < 0) ||
      (Number(valueb18_nb1.value) < 0 && Number(valueb18_nb2.value) > 0)
    ) {
      resultb18.innerText = "Result: True";
      valueb18_nb1.value = "";
      valueb18_nb2.value = "";
    } else {
      resultb18.innerText = "Result: False";
      valueb18_nb1.value = "";
      valueb18_nb2.value = "";
    }
  } else {
    alert("vui lòng nhập số");
    valueb18_nb1.value = "";
    valueb18_nb2.value = "";
  }
}
