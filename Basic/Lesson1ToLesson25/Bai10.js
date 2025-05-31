//Chuyển đổi nhiệt độ giữa độ C và độ F
let cf = document.getElementById("ctof");
let fc = document.getElementById("ftoc");
let resultb10 = document.getElementById("b10Result");
function CToF() {
  if (!isNaN(cf.value)) {
    let c = Number(cf.value);
    let kq = c * 1.8 + 32;
    resultb10.innerText = `Expected Output : ${cf.value}°C is ${kq}°F`;
    cf.value = "";
  } else {
    alert("Vui lòng nhập kí tự số");
    cf.value = "";
  }
}
function FToC() {
  if (!isNaN(fc.value)) {
    let f = Number(fc.value);
    let kq = (f - 32) * 0.55555555555;
    resultb10.innerText = `Expected Output : ${fc.value}°F is ${kq}°C`;
    fc.value = "";
  } else {
    alert("Vui lòng nhập kí tự số");
    fc.value = "";
  }
}
