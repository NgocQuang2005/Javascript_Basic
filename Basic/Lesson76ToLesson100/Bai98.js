/*
    Viết chương trình JavaScript để tìm số nghịch đảo của một mảng số nguyên cho trước. 
    Lưu ý: Hai phần tử của mảng a được lưu trữ ở vị trí i và j sẽ đảo ngược nếu a[i] > a[j] và i < j.
    Nếu giá trị ở vị trí trước lớn hơn giá trị ở vị trí sau → đó là một nghịch đảo
 */
let rsb98 = document.getElementById("rsb98");

function b98(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        count++;
      }
    }
  }
  rsb98.innerText = `Result: Có ${count} cặp nghịch đảo`;
}
b98([2, 3, 8, 6, 1]);
