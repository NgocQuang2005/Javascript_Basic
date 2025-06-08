//Viết chương trình JavaScript để kiểm tra xem một phân số đã cho có đúng hay không.
//Lưu ý: Có hai loại phân số thông dụng là đúng và sai. Khi tử số và mẫu số đều dương, phân số được gọi là đúng nếu tử số nhỏ hơn mẫu số và ngược lại được gọi là sai.
let rsb129 = document.getElementById("rsb129");
function b129(arr) {
  rsb129.innerText = `Result:  ${
    arr[0] / arr[1] < 1 ? "Phân số thực sự" : "Phân số không đúng"
  }`;
}
b129([12, 300]);
