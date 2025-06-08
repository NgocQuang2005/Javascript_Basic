//Viết chương trình JavaScript để kiểm tra xem một điểm có nằm hoàn toàn bên trong đường tròn hay không.
// đầu vào:
// Tâm đường tròn (x, y)
// Bán kính hình tròn: r
// Điểm bên trong đường tròn (a, b)
// công thức: (a-x)^2 + (b-y)^2 < r^2 => nằm bên trong đường tròn
let rsb116 = document.getElementById("rsb116");
function b116(a, b, x, y, r) {
  let ra = Math.pow(a - x, 2);
  let rb = Math.pow(b - y, 2);
  let rr = Math.pow(r, 2);
  if (ra + rb < rr) {
    rsb116.innerText = "Result: True";
    return;
  }
  rsb116.innerText = "Result: False";
}
b116(0, 0, 2, 4, 6);
