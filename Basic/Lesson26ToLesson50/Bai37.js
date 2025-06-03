//Viết chương trình JavaScript để tính tổng của hai số nguyên đã cho. Nếu tổng nằm trong phạm vi 50..80 thì trả về 65 nếu không thì trả về 80.
let numberb37a = document.getElementById("numberb37a");
let numberb37b = document.getElementById("numberb37b");
let rsb37 = document.getElementById("rsb37");
function b37() {
  let a = numberb37a.value;
  let b = numberb37b.value;
  if (!isNaN(a, b)) {
    let kqb37 = Number(a) + Number(b);
    if (kqb37 >= 50 && kqb37 <= 80) {
      rsb37.innerText = "Result: 65";
      numberb37a.value = "";
      numberb37b.value = "";
    } else {
      rsb37.innerText = "Result: 80";
      numberb37a.value = "";
      numberb37b.value = "";
    }
  } else {
    alert("Vui lòng nhập số");
    numberb37a.value = "";
    numberb37b.value = "";
  }
}
