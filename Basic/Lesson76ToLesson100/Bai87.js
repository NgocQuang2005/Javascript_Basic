//Viết chương trình JavaScript để tìm phần tử lớn nhất thứ k trong một mảng số nguyên cho trước.
let rsb87 = document.getElementById("rsb87");
function b87(arr, k) {
  arr.sort((a, b) => {
    return b - a;
  });
  rsb87.innerText = `Result: ${arr[k - 1]}`;
}
b87([2, 4, 5, 1, 8], 2);
