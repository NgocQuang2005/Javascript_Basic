//Chương trình JavaScript này lấy một chuỗi và một số dương làm đầu vào, sau đó tạo một chuỗi mới bằng cách lặp lại chuỗi đã cho với số lần được chỉ định. Kết quả là một chuỗi duy nhất được tạo thành từ chuỗi gốc được sao chép nhiều lần.
let strb55 = document.getElementById("strb55");
let rsb55 = document.getElementById("rsb55");
function b55() {
  let str = strb55.value;
  rsb55.innerText = `Result: ${str.repeat(5)}`;
  strb55.value = "";
}
