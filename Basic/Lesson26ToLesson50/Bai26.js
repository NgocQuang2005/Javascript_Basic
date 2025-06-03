//Viết chương trình JavaScript để kiểm tra xem hai giá trị nguyên đã cho có nằm trong phạm vi 50..99 (đã bao gồm) hay không. Trả về true nếu một trong hai giá trị đó nằm trong phạm vi.
let numberb26a = document.getElementById("numberb26a");
let numberb26b = document.getElementById("numberb26b");
let rsb26 = document.getElementById("rsb26");
function b26() {
  let nba = numberb26a.value;
  let nbb = numberb26b.value;
  if (!isNaN(nba, nbb)) {
    if (
      Number(nba) >= 50 &&
      Number(nba) <= 90 &&
      Number(nbb) >= 50 &&
      Number(nbb) <= 90
    ) {
      rsb26.innerText = "Kết quả: True";
      numberb26a.value = "";
      numberb26b.value = "";
    } else {
      rsb26.innerText = "Kết quả: False";
      numberb26a.value = "";
      numberb26b.value = "";
    }
  } else {
    alert("vui lòng nhập vào 1 số");
    numberb26a.value = "";
    numberb26b.value = "";
  }
}
