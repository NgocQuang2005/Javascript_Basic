//Viết chương trình JavaScript để hoán đổi phần tử đầu tiên và cuối cùng của một mảng số nguyên cho trước. Độ dài mảng tối thiểu phải bằng 1.
let rsb77 = document.getElementById("rsb77");
function b77(arr) {
  if (arr.length >= 1) {
    [arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]];
    rsb77.innerText = `Result: ${arr}`;
  } else {
    rsb77.innerText = "Result: độ dài nhỏ hơn 1";
  }
}
b77([23, 2, 11]);
