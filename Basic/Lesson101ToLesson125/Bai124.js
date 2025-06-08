//Viết chương trình JavaScript để tìm số làm tròn nhỏ nhất không nhỏ hơn một giá trị cho trước.
//Lưu ý: Số tròn được coi một cách không chính thức là số nguyên kết thúc bằng một hoặc nhiều số 0.[3] Vì vậy, 590 tròn hơn 592, nhưng 590 lại tròn hơn 600.
let rsb124 = document.getElementById("rsb124");
function b124(num) {
  while (num % 10) {
    num++;
  }
  rsb124.innerText = `Result: ${num}`;
}
b124(123);
