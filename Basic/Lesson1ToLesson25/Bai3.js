//Get Current Date in Various Formats
let textElm = document.getElementById("currentDate");
function getFullDate() {
  let date = new Date();
  let yyyy = date.getFullYear();
  let mm = date.getMonth();
  let dd = date.getDay();
  textElm.innerHTML = `Result : ${mm}-${dd}-${yyyy}, ${mm}/${dd}/${yyyy} or ${dd}/${mm}/${yyyy}, ${dd}/${mm}/${yyyy}`;
}
getFullDate();
