//Viết chương trình JavaScript để tìm số lượng các số 0 ở cuối trong biểu diễn thập phân của giai thừa của một số cho trước.
let rsb108 = document.getElementById("rsb108");
function b108(number) {
  if (number <= 0) {
    rsb108.innerText = "Giai thừa không hợp lệ";
    return;
  }
  let gthua = 1;
  while (number > 0) {
    gthua *= number;
    number--;
  }
  let count = 0;
  while (gthua % 10 === 0 && gthua !== 0) {
    count++;
    gthua = gthua / 10;
  }
  console.log(count);
}
b108(8);
