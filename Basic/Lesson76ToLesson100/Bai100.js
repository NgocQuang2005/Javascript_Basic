//Viết chương trình JavaScript để tìm hai phần tử của một mảng sao cho hiệu tuyệt đối của chúng không lớn hơn một số nguyên cho trước. Tuy nhiên, nó càng gần với số nguyên càng tốt.
let rsb100 = document.getElementById("rsb100");
function b100(arr, k) {
  let arrHieu = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let hieu = Math.abs(arr[i] - arr[j]);
      if (hieu <= k) {
        arrHieu.push(hieu);
      }
    }
  }
  let result = arrHieu.sort((a, b) => {
    return b - a;
  });
  rsb100.innerText = `Result: ${result[0]}`;
}
b100([12, 10, 33, 34], 24);
