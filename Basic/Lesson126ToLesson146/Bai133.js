//Viết chương trình JavaScript để kiểm tra xem một số nguyên đã cho có lớn hơn 15 hay không và trả về số đã cho, nếu không thì trả về 15.
let rsb133 = document.getElementById("rsb133");
let numberb133 = document.getElementById("numberb133");
function b133() {
  let nb = Number(numberb133.value);
  if (!isNaN(nb)) {
    rsb133.innerText = `Result: ${nb > 15 ? nb : 15}`;
  } else {
    alert("Vui lòng nhập vào 1 số");
    numberb133.value = "";
  }
}
