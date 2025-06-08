//Viết chương trình JavaScript để kiểm tra một số từ ba số cho trước trong đó hai số bằng nhau. Tìm cái thứ ba
let rsb107 = document.getElementById("rsb107");
function b107(x, y, z) {
  if (x !== y && y !== z && z !== x) {
    rsb107.innerText = "Result: không có cặp số bằng nhau";
    return;
  }
  if (x === y) {
    rsb107.innerText = `Result: ${z}`;
  } else if (x === z) {
    rsb107.innerText = `Result: ${y}`;
  } else {
    rsb107.innerText = `Result: ${x}`;
  }
}
b107(1, 1, 3);
