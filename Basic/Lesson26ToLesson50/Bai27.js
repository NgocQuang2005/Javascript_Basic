//Viết chương trình JavaScript để kiểm tra xem hai giá trị nguyên đã cho có nằm trong phạm vi 50..99 (đã bao gồm) hay không. Trả về true nếu một trong hai giá trị đó nằm trong phạm vi.
let numberb27a = document.getElementById("numberb27a");
let numberb27b = document.getElementById("numberb27b");
let numberb27c = document.getElementById("numberb27c");
let rsb27 = document.getElementById("rsb27");
function b27() {
  let nba = numberb27a.value;
  let nbb = numberb27b.value;
  let nbc = numberb27c.value;
  if (!isNaN(nba, nbb, ncb)) {
    if (
      Number(nba) >= 50 &&
      Number(nba) <= 90 &&
      Number(nbb) >= 50 &&
      Number(nbb) <= 90 &&
      Number(nbc) >= 50 &&
      Number(nbc) <= 90
    ) {
      rsb27.innerText = "Kết quả: True";
      numberb27a.value = "";
      numberb27b.value = "";
      numberb27c.value = "";
    } else {
      rsb27.innerText = "Kết quả: False";
      numberb27a.value = "";
      numberb27b.value = "";
      numberb27c.value = "";
    }
  } else {
    alert("vui lòng nhập vào 1 số");
    numberb27a.value = "";
    numberb27b.value = "";
    numberb27c.value = "";
  }
}
