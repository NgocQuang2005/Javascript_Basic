//Viết chương trình JavaScript để tìm tổng tối đa có thể có của một số k số liên tiếp của nó (các số nối tiếp nhau theo thứ tự) trong một mảng số nguyên dương cho trước.
let rsb88 = document.getElementById("rsb88");
function b88(arr, k) {
  let maxSum = 0;
  for (let i = 0; i < arr.length - k + 1; i++) {
    let sum = 0;
    for (let j = i; j < i + k; j++) {
      sum += arr[j];
    }
    if (sum > maxSum) {
      maxSum = sum;
    }
  }
  rsb88.innerText = `Result: ${maxSum}`;
}
b88([2, 3, 5, 1, 6], 3);
