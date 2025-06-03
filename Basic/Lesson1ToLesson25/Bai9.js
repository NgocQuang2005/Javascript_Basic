//Viết chương trình JavaScript để tính phép nhân và chia của hai số (đầu vào từ người dùng).
let a = document.getElementById("numbera");
let b = document.getElementById("numberb");
let results = document.getElementById("b9Result");
function Multiply() {
  if (!isNaN(a.value, b.value)) {
    let kq = Number(a.value) * Number(b.value);
    results.innerText = `Result: ${kq}`;
    a.value = "";
    b.value = "";
  } else {
    alert("vui lòng nhập kí tự số");
    a.value = "";
    b.value = "";
  }
}
function Divide() {
  if (!isNaN(a.value, b.value)) {
    let kq = Number(a.value) / Number(b.value);
    results.innerText = `Result: ${kq}`;
    a.value = "";
    b.value = "";
  } else {
    alert("vui lòng nhập kí tự số");
    a.value = "";
    b.value = "";
  }
}
