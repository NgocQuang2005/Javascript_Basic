//Viết chương trình JavaScript để kiểm tra xem ma trận đã cho có phải là tam giác nhỏ hay không.
//Lưu ý: Ma trận vuông được gọi là ma trận tam giác dưới nếu tất cả các phần tử phía trên đường chéo chính đều bằng 0.
let rsb117 = document.getElementById("rsb117");
function b117(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = i + 1; j < matrix.length; j++) {
      if (matrix[i][j] !== 0) {
        rsb117.innerText = "Result: False";
        return;
      }
    }
  }
  rsb117.innerText = "Result: True";
}
b117([
  [1, 0, 0],
  [2, 0, 0],
  [0, 3, 3],
]);
