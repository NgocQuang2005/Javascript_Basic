//Trong khoa học máy tính, tiền tố tổng, tổng tích lũy, quét bao gồm hoặc đơn giản là quét của một chuỗi số x0, x1, x2, ... là chuỗi số thứ hai y0, y1, y2, ..., tổng các tiền tố của chuỗi đầu vào:
// y0 = x0
// y1 = x0 + x1
// y2 = x0 + x1+ x2
let rsb127 = document.getElementById("rsb127");
function b127(arr) {
  let newArr = [];
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    newArr.push(sum);
  }
  rsb127.innerText = `Result: [${newArr}]`;
}
b127([1, 2, 3, 4, 5]);
