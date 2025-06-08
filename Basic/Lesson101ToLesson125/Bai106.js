//Viết chương trình JavaScript để tìm số giá trị chẵn theo thứ tự trước lần xuất hiện đầu tiên của một số cho trước.
let rsb106 = document.getElementById("rsb106");
function b106(arr, k) {
  let count = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === k) {
      break;
    }
    if (arr[i] % 2 === 0) {
      count++;
    }
  }
  rsb106.innerText = `Result: ${count}`;
}
b106([1, 2, 3, 4, 5, 6, 7, 8], 5);
