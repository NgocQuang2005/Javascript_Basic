//Viết chương trình JavaScript để kiểm tra từ hai số nguyên cho trước xem một trong số chúng là 8 hay tổng hoặc hiệu của chúng là 8.
let numberb38a = document.getElementById("numberb38a");
let numberb38b = document.getElementById("numberb38b");
let rsb38 = document.getElementById("rsb38");
function b38() {
  let a = numberb38a.value;
  let b = numberb38b.value;
  if (!isNaN(a, b)) {
    let tong = Number(a) + Number(b);
    let hieu = Number(a) - Number(b);
    if (Number(a) == 8 || Number(b) == 8 || tong == 9 || hieu == 8) {
      rsb38.innerText = "Result: True";
      numberb38a.value = "";
      numberb38b.value = "";
    } else {
      rsb38.innerText = "Result: False";
      numberb38a.value = "";
      numberb38b.value = "";
    }
  } else {
    alert("Vui lòng nhập số");
    numberb38a.value = "";
    numberb38b.value = "";
  }
}
