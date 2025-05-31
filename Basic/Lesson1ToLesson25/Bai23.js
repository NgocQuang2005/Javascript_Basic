//
let numberb23 = document.getElementById("numberb23");
let resultb23 = document.getElementById("rsb23");
function b23() {
  if (!isNaN(numberb23.value)) {
    if (Number(numberb23.value) % 3 == 0 && Number(numberb23.value) % 7 == 0) {
      resultb23.innerText = `${numberb23.value} là bội số của 3 và 7`;
      numberb23.value = "";
    } else {
      resultb23.innerText = `${numberb23.value} không phải là bội số của 3 và 7`;
      numberb23.value = "";
    }
  } else {
    alert("Vui lòng nhập kí tự số");
    numberb23.value = "";
  }
}
