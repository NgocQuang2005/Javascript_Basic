//Viết chương trình JavaScript để kiểm tra xem một mảng số nguyên cho trước có chứa 30 và 40 hai lần hay không. Độ dài mảng phải là 0, 1 hoặc 2.
let rsb76 = document.getElementById("rsb76");
function b76(arr) {
  let a = arr[0];
  let b = arr[1];
  if ((a == 30 && b == 30) || (a == 40 && b == 40)) {
    rsb76.innerText = "Result: True";
  } else {
    rsb76.innerText = "Result: False";
  }
}
b76([30, 30]);
