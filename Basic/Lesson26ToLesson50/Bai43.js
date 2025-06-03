//
let numberb43a = document.getElementById("numberb43a");
let numberb43b = document.getElementById("numberb43b");
let rsb43 = document.getElementById("rsb43");
function b43() {
  let a = Number(numberb43a.value);
  let b = Number(numberb43b.value);

  if (!isNaN(a, b)) {
    let tong = a + b;
    let hieu = a - b;
    if (a == 15 || b == 15 || tong == 15 || hieu == 15) {
      rsb43.innerText = "Result: True";
      numberb43a.value = "";
      numberb43b.value = "";
    } else {
      rsb43.innerText = "Result: False";
      numberb43a.value = "";
      numberb43b.value = "";
    }
  } else {
    alert("Vui lòng nhập số");
    numberb43a.value = "";
    numberb43b.value = "";
  }
}
