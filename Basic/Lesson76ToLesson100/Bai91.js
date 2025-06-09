//Viết chương trình JavaScript để tìm số xuất hiện thường xuyên nhất trong một mảng số nguyên cho trước.
let rsb91 = document.getElementById("rsb91");
function b91(arr) {
  // lưu key và value=> key là số đó và value là số lần xuất hiện
  let count = {};
  for (let num of arr) {
    count[num] = (count[num] || 0) + 1;
  }
  console.table(count);
  // lấy ra số xuất hiện nhiều nhất
  let maxCount = 0;
  let result = null;
  // tìm số xuất hiện nhiều nhất
  for (let num in count) {
    if (count[num] > maxCount) {
      maxCount = count[num];
      result = Number(num);
    }
  }
  console.log(result);
}
b91([1, 2, 3, 4, 1, 5]);
