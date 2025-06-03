let numberb39a = document.getElementById("numberb39a");
let numberb39b = document.getElementById("numberb39b");
let numberb39c = document.getElementById("numberb39c");
let rsb39 = document.getElementById("rsb39");
function b39() {
  let a = numberb39a.value;
  let b = numberb39b.value;
  let c = numberb39c.value;

  if (!isNaN(a, b, c)) {
    if (Number(a) == Number(b) && Number(b) == Number(c)) {
      rsb39.innerText = "Result: 30";
      numberb39a.value = "";
      numberb39b.value = "";
      numberb39c.value = "";
    } else if (
      Number(a) == Number(b) ||
      Number(b) == Number(c) ||
      Number(a) == Number(c)
    ) {
      rsb39.innerText = "Result: 40";
      numberb39a.value = "";
      numberb39b.value = "";
      numberb39c.value = "";
    } else {
      rsb39.innerText = "Result: 20";
      numberb39a.value = "";
      numberb39b.value = "";
      numberb39c.value = "";
    }
  } else {
    alert("Vui lòng nhập số");
    numberb39a.value = "";
    numberb39b.value = "";
    numberb39c.value = "";
  }
}
