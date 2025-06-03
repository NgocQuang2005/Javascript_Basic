//Viết chương trình JavaScript để kiểm tra xem một mảng số nguyên có độ dài 2 chứa 1 hay 3.
let rsb74 = document.getElementById("rsb74");
function b74(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 1 || arr[i] == 3) {
      rsb74.innerText = "Result: true";
    } else {
      rsb74.innerText = "Result: false";
    }
  }
}
b74([1, 4]);
