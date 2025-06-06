//Viết chương trình JavaScript để kiểm tra xem có ít nhất một phần tử trong hai mảng số nguyên được sắp xếp cho trước hay không.
let rsb96 = document.getElementById("rsb96");
function b96(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) {
      rsb96.innerText = `Result: True`;
    } else {
      rsb96.innerText = `Result: False`;
    }
  }
}
b96([1, 2, 3], [3, 4, 5]);
