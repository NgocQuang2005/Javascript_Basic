//Viết chương trình JavaScript để kiểm tra xem một số nguyên đã cho có dãy chữ số tăng dần hay không.
let rsb115 = document.getElementById("rsb115");
function b115(number) {
  let convert = number.toString().split("");
  for (let i = 0; i < convert.length - 1; i++) {
    if (convert[i] >= convert[i + 1]) {
      rsb115.innerText = "Result: False";
      return;
    }
  }
  rsb115.innerText = "Result: True";
}
b115(123);
