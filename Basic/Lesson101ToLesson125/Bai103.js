//Viết chương trình JavaScript để tìm số cặp được sắp xếp tạo thành bởi mảng số nguyên. Điều này sao cho một phần tử trong cặp có thể chia hết cho phần tử kia.
let rsb103 = document.getElementById("rsb103");
function b103(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] % arr[i] === 0) {
        count++;
      }
    }
  }
  rsb103.innerText = `Result: ${count}`;
}
b103([2, 4, 16]);
