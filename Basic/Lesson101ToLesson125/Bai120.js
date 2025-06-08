//Viết chương trình JavaScript để tạo giá trị NOR của hai giá trị boolean cho trước.
//Đối với x = true và y = false, đầu ra phải là logical_Nor(x, y) = false; Đối với x = false và y = false, đầu ra phải là logical_Nor(x, y) = true.
let rsb120 = document.getElementById("rsb120");
function b120(a, b) {
  let x = Number(a);
  let y = Number(b);
  if (x === 0 && y === 0) {
    rsb120.innerText = "Result: True";
    return;
  }
  rsb120.innerText = "Result: False";
}
b120(false, false);
