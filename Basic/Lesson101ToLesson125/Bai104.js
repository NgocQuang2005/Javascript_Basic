//Viết chương trình JavaScript để tạo tích vô hướng của hai vectơ 3D cho trước.
//Lưu ý: Tích số chấm là tổng tích các phần tử tương ứng của hai dãy số.
let rsb104 = document.getElementById("rsb104");
function b104(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    rsb104.innerText = "Result: Độ dài 2 mảng không bẳng nhau";
    return;
  }
  let sum = 0;
  for (let i = 0; i < arr1.length; i++) {
    let tich = arr1[i] * arr2[i];
    sum += tich;
  }
  rsb104.innerText = `Result: ${sum}`;
}
b104([2, 4, 6], [2, 4, 6]);
