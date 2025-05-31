//Viết chương trình JavaScript trong đó chương trình lấy một số nguyên ngẫu nhiên từ 1 đến 10 và sau đó người dùng được nhắc nhập số đoán. Chương trình hiển thị thông báo "Làm việc tốt" nếu đầu vào khớp với số dự đoán, nếu không thì "Không khớp".
let inputValueb7 = document.getElementById("ipguessNumber");
let resultElm = document.getElementById("rsguessNumber");
function guessNumber() {
  let number = Math.ceil(Math.random() * 10);
  if (!isNaN(inputValueb7.value) && inputValueb7.value <= 10) {
    if (number === Number(inputValueb7.value)) {
      resultElm.innerText = `Result: Bạn đã đoán trúng rồi nó chính là số ${number}`;
      inputValueb7.value = "";
    } else {
      resultElm.innerText = `Result: Bạn đã đoán sai rồi nó chính là số ${number}`;
      inputValueb7.value = "";
    }
  } else if (
    Number(inputValueb7.value) < 0 ||
    Number(inputValueb7.value) > 10
  ) {
    alert("Vui lòng nhập vào 1 số từ 1-10");
    inputValueb7.value = "";
  } else {
    alert("Vui lòng nhập vào 1 số");
    inputValueb7.value = "";
  }
}
