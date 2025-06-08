//Viết chương trình JavaScript để kiểm tra xem ma trận có phải là ma trận chéo hay không. Trong đại số tuyến tính, ma trận đường chéo là ma trận trong đó các phần tử nằm ngoài đường chéo chính đều bằng 0 (đường chéo từ trên bên trái đến dưới bên phải).
let rsb111 = document.getElementById("rsb111");
function b111(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (i !== j && matrix[i][j] !== 0) {
        rsb111.innerText = "Result: False";
        return;
      }
    }
  }
  rsb111.innerText = "Result: True";
}
b111([
  [1, 0, 0],
  [0, 2, 0],
  [0, 0, 3],
]);
