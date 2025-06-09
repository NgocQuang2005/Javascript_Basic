//Viết chương trình JavaScript để tìm hiểu xem các phần tử của một mảng số nguyên nhất định có phải là hoán vị của các số từ 1 đến một số nguyên nhất định hay không.
let rsb119 = document.getElementById("rsb119");
function b119(arr, n) {
  if (arr.length !== n) {
    rsb119.innerText = "Result: False";
    return;
  }
  let set = new Set();
  for (let i = 0; i < n; i++) {
    if (arr[i] < 1 || arr[i] > n) {
      rsb119.innerText = "Result: False";
      return;
    }
    if (set.has(arr[i])) {
      rsb119.innerText = "Result: False";
      return;
    }
    set.add(arr[i]);
  }
  rsb119.innerText = "Result: True";
}
b119([1, 2, 3, 4, 5], 5);
