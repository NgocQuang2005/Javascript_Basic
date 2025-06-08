//Viết chương trình JavaScript để lấy số chẵn lớn nhất từ ​​một mảng các số nguyên.
let rsb122 = document.getElementById("rsb122");
function b122(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      newArr.push(arr[i]);
    }
  }
  newArr.sort((a, b) => {
    return b - a;
  });
  rsb122.innerText = `Result: ${newArr[0]}`;
}
b122([1, 2, 3, 4, 5, 6, 7, 8, 12, 16, 17, 19]);
