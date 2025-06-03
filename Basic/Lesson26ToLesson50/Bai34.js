//Viết chương trình JavaScript để kiểm tra xem chữ số cuối cùng của ba số nguyên dương có giống nhau hay không.
let numberb34a = document.getElementById("numberb34a");
let numberb34b = document.getElementById("numberb34b");
let numberb34c = document.getElementById("numberb34c");
let rsb34 = document.getElementById("rsb34");
function b34() {
  let a = numberb34a.value;
  let b = numberb34b.value;
  let c = numberb34c.value;
  if (!isNaN(a, b, c)) {
    if (Number(a) > 0 && Number(b) > 0 && Number(c) > 0) {
      rsb34.innerText = `Result: ${
        x % 10 === y % 10 && y % 10 === z % 10 && x % 10 === z % 10
      }`;
    } else {
      rsb34.innerText = `Result: False`;
    }
  }
}
