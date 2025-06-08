//Viết chương trình JavaScript để tìm số lượng các số 0 ở cuối trong biểu diễn thập phân của giai thừa của một số cho trước.
let rsb108 = document.getElementById("rsb108");
function b108(number) {
  if (number <= 0) {
    rsb108.innerText = "Giai thừa không hợp lệ";
    return;
  }
}
b108(8);
