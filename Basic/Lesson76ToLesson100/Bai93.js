//Viết chương trình JavaScript để tính tổng hiệu tuyệt đối của các số liên tiếp trong một mảng số nguyên cho trước.
let rsb93 = document.getElementById("rsb93");
function b93(arr) {
  let tong = [];
  let hieu = [];
  for (let i = 0; i < arr.length - 1; i++) {
    tong.push(arr[i] + arr[i + 1]);
    hieu.push(arr[i] - arr[i + 1]);
  }
  rsb93.innerText = `Result: Tổng [${tong}], Hiệu [${hieu}]`;
}
b93([3, 6, 7, 4, 3, 5]);
