//Viết chương trình JavaScript để tìm số phần tử trong cả hai mảng.
let rsb137 = document.getElementById("rsb137");
function b137(arr1, arr2) {
  let count = 0;
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        count++;
      }
    }
  }
  rsb137.innerText = `Result: ${count}`;
}
b137([1, 2, 3, 4], [1, 2, 3, 5]);
