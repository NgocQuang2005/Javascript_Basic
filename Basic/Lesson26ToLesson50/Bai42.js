//Viết một chương trình JavaScript để đánh giá ba số nguyên cho trước để xác định xem có số nào lớn hơn hoặc bằng 20 và nhỏ hơn hai số còn lại không.
let numberb42a = document.getElementById("numberb42a");
let numberb42b = document.getElementById("numberb42b");
let numberb42c = document.getElementById("numberb42c");
let rsb42 = document.getElementById("rsb42");
function b42() {
  let a = Number(numberb42a.value);
  let b = Number(numberb42b.value);
  let c = Number(numberb42c.value);

  if (!isNaN(a, b, c)) {
    if (
      (a >= 20 && (a < b || a < c)) ||
      (b >= 20 && (b < a || b < c)) ||
      (c >= 20 && (c < a || c < b))
    ) {
      rsb42.innerText = "Result: True";
      numberb42a.value = "";
      numberb42b.value = "";
      numberb42c.value = "";
    } else {
      rsb42.innerText = "Result: False";
      numberb42a.value = "";
      numberb42b.value = "";
      numberb42c.value = "";
    }
  } else {
    alert("Vui lòng nhập số");
    numberb42a.value = "";
    numberb42b.value = "";
    numberb42c.value = "";
  }
}
