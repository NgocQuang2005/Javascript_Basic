//Viết chương trình JavaScript để kiểm tra xem một ma trận đã cho có phải là ma trận đồng nhất hay không.
//Lưu ý: Trong đại số tuyến tính, ma trận đơn vị, hay đôi khi được gọi một cách mơ hồ là ma trận đơn vị, có kích thước n là n ? n ma trận vuông với các số trên đường chéo chính và các số 0 ở nơi khác.
/* công thức
  Nếu 𝑖 = 𝑗 (đường chéo chính) → phần tử phải bằng 1.
  Nếu 𝑖 ≠ 𝑗  phần tử phải bằng 0.
*/
let rsb113 = document.getElementById("rsb113");
function b113(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (i === j && matrix[i][j] !== 1) {
        rsb113.innerText = "Result: False";
        return;
      }
      if (i !== j && matrix[i][j] !== 0) {
        rsb113.innerText = "Result: False";
        return;
      }
    }
  }
  rsb113.innerText = "Result: True";
}
b113([
  [1, 0, 0],
  [0, 1, 0],
  [0, 0, 1],
]);
