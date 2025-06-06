/*
Viết chương trình JavaScript để tìm các loại góc cho trước.  

Các loại góc:
Góc nhọn: Góc từ 0 đến 90 độ.
Góc vuông: Một góc 90 độ.
Góc tù: Góc từ 90 đến 180 độ.
Góc thẳng: Góc 180 độ.
*/
let angle83 = document.getElementById("angle83");
let rsb83 = document.getElementById("rsb83");
function b83() {
  let angle = Number(angle83.value);
  if (!isNaN(angle) && angle > 0) {
    if (angle < 90) {
      rsb83.innerText = "Result:  Gọc nhọn";
      angle83.value = "";
    } else if (angle == 90) {
      rsb83.innerText = "Result:  Gọc vuông";
      angle83.value = "";
    } else if (angle < 180) {
      rsb83.innerText = "Result:  Gọc tù";
      angle83.value = "";
    } else if (angle == 180) {
      rsb83.innerText = "Result:  Gọc thẳng";
      angle83.value = "";
    } else {
      rsb83.innerText = "Result:  Gọc phản xạ";
      angle83.value = "";
    }
  } else {
    alert("Độ góc phải là chữ số");
    angle83.value = "";
  }
}
