//Viết chương trình JavaScript để kiểm tra xem một số đã cho có nằm trong một phạm vi nhất định hay không.
let rsb114 = document.getElementById("rsb114");
function b114(x, y, z) {
  rsb114.innerText = `Result: ${x < y && y < z}`;
}
b114(1, 2, 3);
