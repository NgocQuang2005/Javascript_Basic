//Viết chương trình JavaScript để kiểm tra xem một dãy số nguyên cho trước có biểu thị một dãy tăng hay giảm đúng hay không.
let rsb118 = document.getElementById("rsb118");
function b118(arr) {
  if (arr[0] < arr[1]) {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] >= arr[i + 1]) {
        rsb118.innerText = "Result: False";
        return;
      }
    }
  } else if (arr[0] > arr[1]) {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] <= arr[i + 1]) {
        rsb118.innerText = "Result: False";
        return;
      }
    }
  } else {
    rsb118.innerText = "Result: False";
    return;
  }
  rsb118.innerText = "Result: True";
}
b118([-3, -2, -1]);
