//Chương trình JavaScript này kiểm tra xem một số có nằm trong phạm vi bao gồm từ 40 đến 10.000 hay không. Nó kiểm tra xem số đó có lớn hơn hoặc bằng 40 và nhỏ hơn hoặc bằng 10.000 hay không. Nếu số đó thỏa mãn điều kiện này, nó trả về true; nếu không, nó trả về false.
let number45 = document.getElementById("number45");
let rsb45 = document.getElementById("rsb45");
function b45() {
  let nbb45 = Number(number45.value);
  if (!isNaN(nbb45)) {
    if (nbb45 >= 40 && number45 <= 10000) {
      rsb45.innerText = "Result: True";
      number45.value = "";
    } else {
      rsb45.innerText = "Result: False";
      number45.value = "";
    }
  } else {
    alert("Vui lòng nhập số");
    number45.value = "";
  }
}
