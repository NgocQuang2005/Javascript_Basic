//Viết chương trình JavaScript để tìm giá trị lớn nhất giữa phần tử đầu tiên và phần tử cuối cùng và đặt tất cả các phần tử khác thành giá trị đó. Hiển thị mảng được cập nhật.

let rsb72 = document.getElementById("rsb72");
function b72(arr, arr1) {
  let a = arr[1];
  let b = arr1[1];
  let newarr = [];
  newarr.push(a, b);
  rsb72.innerText = `Result: ${newarr}`;
}
b72([332, 22, 333], [123, 451, 122]);
