//Viết chương trình JavaScript nhận vào hai số nguyên và một ước số. Nếu ước số đã cho chia cả hai số nguyên và không chia hết thì hai số nguyên đã cho là tương tự nhau. Kiểm tra xem hai số nguyên có giống nhau hay không.
let rsb85 = document.getElementById("rsb85");
let numberb85a = document.getElementById("numberb85a");
let numberb85b = document.getElementById("numberb85b");
let uocb85 = document.getElementById("uocb85");
function b85() {
  let a = Number(numberb85a.value);
  let b = Number(numberb85b.value);
  let uoc = Number(uocb85.value);
  if (!isNaN(a, b, uoc)) {
    if ((a % uoc === 0 && b % uoc === 0) || (a % uoc !== 0 && b % uoc !== 0)) {
      rsb85.innerText = "Result: True";
      numberb85a.value = "";
      numberb85b.value = "";
      uocb85.value = "";
    } else {
      rsb85.innerText = "Result: False";
      numberb85a.value = "";
      numberb85b.value = "";
      uocb85.value = "";
    }
  } else {
    alert("Các ô phải truyền vào là số");
    numberb85a.value = "";
    numberb85b.value = "";
    uocb85.value = "";
  }
}
