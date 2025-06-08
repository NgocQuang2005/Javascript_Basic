//Viết chương trình JavaScript để chia một số nguyên cho một số nguyên khác với điều kiện kết quả là số nguyên và trả về kết quả đó.
let rsb102 = document.getElementById("rsb102");
let numberb102 = document.getElementById("numberb102");
let divisor102 = document.getElementById("divisor102");
function b102() {
  let number = Number(numberb102.value);
  let a = Number(divisor102.value);
  if (!isNaN(number, a)) {
    if (a === 0) {
      rsb102.innerText = `Result: không thể chia cho 0`;
      return;
    }
    if (a === 1) {
      rsb102.innerText = `Result: ${number}`;
      return;
    }
    if (number % a === 0) {
      let chia = number / a;
      rsb102.innerText = `Result: ${chia}`;
    } else {
      rsb102.innerText = `Result:kết quả không phải là số nguyên`;
    }
  } else {
    alert("Vui lòng nhập vào số nhe");
    numberb102.value = "";
    divisor102.value = "";
  }
}
