//Kiểm tra xem hai số có nằm trong phạm vi cụ thể không 40-60, 70-100
let numberb31a = document.getElementById("numberb31a");
let numberb31b = document.getElementById("numberb31b");
let rsb31 = document.getElementById("rsb31");
function b31() {
  let nba = numberb31a.value;
  let nbb = numberb31b.value;
  if (!isNaN(nba, nbb)) {
    if (
      (Number(nba) >= 40 &&
        Number(nba) <= 60 &&
        Number(nbb) >= 40 &&
        Number(nbb) <= 60) ||
      (Number(nba) >= 70 &&
        Number(nba) <= 100 &&
        Number(nbb) >= 70 &&
        Number(nbb) <= 100)
    ) {
      rsb31.innerText = "Kết quả: True";
      numberb31a.value = "";
      numberb31b.value = "";
    } else {
      rsb31.innerText = "Kết quả: False";
      numberb31a.value = "";
      numberb31b.value = "";
    }
  } else {
    alert("vui lòng nhập vào 1 số");
    numberb31a.value = "";
    numberb31b.value = "";
  }
}
