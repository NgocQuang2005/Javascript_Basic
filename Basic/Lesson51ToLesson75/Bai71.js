//Viết chương trình JavaScript để tìm giá trị lớn nhất giữa phần tử đầu tiên và phần tử cuối cùng và đặt tất cả các phần tử khác thành giá trị đó. Hiển thị mảng được cập nhật.

let rsb71 = document.getElementById("rsb71");
function b71(arr) {
  let valuemax = arr[0] > arr[2] ? arr[0] : arr[2];
  arr[0] = valuemax;
  arr[1] = valuemax;
  arr[2] = valuemax;
  rsb71.innerText = `Result: ${arr}`;
}
b71([332, 22, 333]);
