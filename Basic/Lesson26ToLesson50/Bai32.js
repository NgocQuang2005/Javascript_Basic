//Kiểm tra xem hai số có nằm trong phạm vi cụ thể không 40-60, 70-100
let numberb32a = document.getElementById("numberb32a");
let numberb32b = document.getElementById("numberb32b");
let rsb32 = document.getElementById("rsb32");
function b32() {
  let nba = numberb32a.value;
  let nbb = numberb32b.value;
  if (!isNaN(nba, nbb)) {
    if (nba >= 40 && nba <= 60 && nbb >= 40 && nbb <= 60) {
      if (nba == nbb) {
        rsb32.innerText = `Result: Cả 2 số bằng nhau`;
        numberb32a.value = "";
        numberb32b.value = "";
      } else if (nba > nbb) {
        rsb32.innerText = `Result: ${nba}`;
        numberb32a.value = "";
        numberb32b.value = "";
      } else {
        rsb32.innerText = `Result: ${nbb}`;
        numberb32a.value = "";
        numberb32b.value = "";
      }
    } else {
      rsb32.innerText = "Result: Cả 2 số nhỏ hơn trong khoảng 40-60";
      numberb32a.value = "";
      numberb32b.value = "";
    }
  } else {
    alert("vui lòng nhập vào 1 số");
    numberb32a.value = "";
    numberb32b.value = "";
  }
}
