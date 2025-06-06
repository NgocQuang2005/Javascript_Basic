//Viết chương trình JavaScript để tìm chuỗi dài nhất từ ​​một mảng chuỗi cho trước.
let rsb80 = document.getElementById("rsb80");
function b80(arr) {
  let kq = arr.reduce(
    (init, value) => (value.length > init.length ? value : init),
    ""
  );
  rsb80.innerText = `Result: ${kq}`;
}
b80(["js", "html", "css"]);
