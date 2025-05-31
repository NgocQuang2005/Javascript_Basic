//Write a JavaScript program to find out if 1st January will be a Sunday between 2014 and 2050.
function checkDate() {
  let textElmb6 = document.getElementById("yearb6");
  let arrYear = [];
  for (let year = 2014; year <= 2050; year++) {
    let date = new Date(year, 1, 0);
    if (date.getDay() === 0) {
      arrYear.push(year);
    }
  }
  return arrYear.map((value) => {
    let li = document.createElement("li");
    li.innerText = `Năm ${value} có ngày 1 tháng 1 là chủ nhật`;
    textElmb6.appendChild(li);
  });
}
checkDate();
