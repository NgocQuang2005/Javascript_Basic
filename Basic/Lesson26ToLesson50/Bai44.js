//Viết chương trình JavaScript để kiểm tra hai số nguyên không âm cho trước nếu một (không phải cả hai) là bội số của 7 hoặc 11.
let numberb44a = document.getElementById("numberb44a");
let numberb44b = document.getElementById("numberb44b");
let rsb44 = document.getElementById("rsb44");
function b44() {
  let a = Number(numberb44a.value);
  let b = Number(numberb44b.value);
  if (!isNaN(a, b)) {
    if (
      (a, b > 0) &&
      (a % 7 == 0 || a % 11 == 0 || b % 7 == 0 || b % 11 == 0)
    ) {
      rsb44.innerText = "Result: True";
      numberb44a.value = "";
      numberb44b.value = "";
    } else {
      rsb44.innerText = "Result: False";
      numberb44a.value = "";
      numberb44b.value = "";
    }
  } else {
    alert("Vui lòng nhập số");
    numberb44a.value = "";
    numberb44a.value = "";
  }
}
