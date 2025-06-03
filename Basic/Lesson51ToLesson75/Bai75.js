//Viết chương trình JavaScript để kiểm tra xem một mảng số nguyên có độ dài 2 không chứa 1 hoặc 3.
let rsb75 = document.getElementById("rsb75");
function b75(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != 1 || arr[i] != 3) {
      rsb75.innerText = "Result: true";
    } else {
      rsb75.innerText = "Result: false";
    }
  }
}
b75([1, 5]);
