//Viết chương trình JavaScript để kiểm tra từ ba số đã cho (số nguyên không âm) rằng hai hoặc tất cả chúng có cùng chữ số ngoài cùng bên phải.
let numberb41a = document.getElementById("numberb41a");
let numberb41b = document.getElementById("numberb41b");
let numberb41c = document.getElementById("numberb41c");
let rsb41 = document.getElementById("rsb41");
function b41() {
  let a = numberb41a.value;
  let b = numberb41b.value;
  let c = numberb41c.value;

  if (!isNaN(a, b, c)) {
    let enda = Number(a.split("")[a.length - 1]);
    let endb = Number(b.split("")[b.length - 1]);
    let endc = Number(c.split("")[c.length - 1]);
    if (enda == endb && endb == endc) {
      rsb41.innerText = "Result: True";
      numberb41a.value = "";
      numberb41b.value = "";
      numberb41c.value = "";
    } else {
      rsb41.innerText = "Result: False";
      numberb41a.value = "";
      numberb41b.value = "";
      numberb41c.value = "";
    }
  } else {
    alert("Vui lòng nhập số");
    numberb41a.value = "";
    numberb41b.value = "";
    numberb41c.value = "";
  }
}
