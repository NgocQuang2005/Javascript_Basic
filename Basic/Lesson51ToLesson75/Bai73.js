//Viết chương trình JavaScript để tạo một mảng bằng cách lấy phần tử đầu tiên và cuối cùng từ một mảng số nguyên cho trước. Độ dài phải lớn hơn hoặc bằng 1.
let rsb73 = document.getElementById("rsb73");
function b73(arr) {
  if (arr.length >= 1) {
    let arrNew = [arr[0], arr[arr.length - 1]];
    rsb73.innerText = `Result: ${arrNew}`;
  } else {
    rsb73.innerText = `Result: Độ dài mảng nhỏ hơn 1`;
  }
}
b73([332, 33, 113]);
