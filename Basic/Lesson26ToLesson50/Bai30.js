//Tìm Giá trị Gần nhất tới 100 từ Hai Số
let numberb30a = document.getElementById("numberb30a");
let numberb30b = document.getElementById("numberb30b");
let rsb30 = document.getElementById("rsb30");
function b30() {
  let nba = numberb30a.value;
  let nbb = numberb30b.value;
  if (!isNaN(nba, nbb)) {
    let a = 100 - Number(nba);
    let b = 100 - Number(nbb);
    if (a > b) {
      rsb30.innerText = `Result: ${nbb} gần số 100`;
      numberb30a.value = "";
      numberb30b.value = "";
    } else if (a < b) {
      rsb30.innerText = `Result: ${nba} gần số 100`;
      numberb30a.value = "";
      numberb30b.value = "";
    } else {
      rsb30.innerText = `Result: cả 2 số bằng nhau`;
      numberb30a.value = "";
      numberb30b.value = "";
    }
  } else {
    alert("vui lòng nhập số");
    numberb30a.value = "";
    numberb30b.value = "";
  }
}
