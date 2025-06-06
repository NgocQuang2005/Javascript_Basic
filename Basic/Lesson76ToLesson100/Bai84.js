//Viết chương trình JavaScript để xác định xem hai mảng số nguyên có cùng độ dài có giống nhau hay không. Các mảng sẽ tương tự nếu một mảng có thể được lấy từ một mảng khác bằng cách hoán đổi tối đa một cặp phần tử.
let rsb84 = document.getElementById("rsb84");
function b84(arr1, arr2) {
  if (arr1.length == arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] != arr2[i]) {
        rsb84.innerText = "Result: False";
        break;
      }
      rsb84.innerText = "Result: True";
    }
  } else {
    rsb84.innerText = "Result: False (Độ dài 2 mảng không bằng nhau)";
  }
}
b84([20, 30, 40], [20, 30, 40]);
