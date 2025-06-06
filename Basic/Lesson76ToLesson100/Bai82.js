//Viết chương trình JavaScript để chia một mảng số nguyên dương cho trước thành hai phần. Phần tử thứ nhất thuộc về phần thứ nhất, phần tử thứ hai thuộc về phần thứ hai và phần tử thứ ba thuộc về phần thứ nhất, v.v. Bây giờ hãy tính tổng của hai phần và lưu trữ nó trong một mảng có kích thước hai.
let rsb82 = document.getElementById("rsb82");
function b82(arr) {
  let arrChan = [];
  let arrLe = [];
  let kq = [];
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 == 0) {
      arrChan.push(arr[i]);
    } else {
      arrLe.push(arr[i]);
    }
  }
  let a = arrChan.reduce((init, vl) => vl + init);
  let b = arrLe.reduce((init, vl) => vl + init);
  kq.push(a, b);
  rsb82.innerText = `Result: ${kq}`;
}
b82([1, 3, 5, 12, 8, 9]);
