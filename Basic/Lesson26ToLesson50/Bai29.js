//Tìm số lớn nhất trong ba số nguyên
let numberb29a = document.getElementById("numberb29a");
let numberb29b = document.getElementById("numberb29b");
let numberb29c = document.getElementById("numberb29c");
let rsb29 = document.getElementById("rsb29");
function b29() {
  let a = Number(numberb29a.value);
  let b = Number(numberb29b.value);
  let c = Number(numberb29c.value);
  let arr = [a, b, c];
  arr.sort(function (a, b) {
    return b - a;
  });
  rsb29.innerText = `Result: ${arr[0]}`;
  numberb29a.value = "";
  numberb29b.value = "";
  numberb29c.value = "";
}
