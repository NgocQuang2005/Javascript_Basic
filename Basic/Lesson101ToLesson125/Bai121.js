//Viết chương trình JavaScript để tìm chuỗi dài nhất trong một mảng nhất định.
let rsb121 = document.getElementById("rsb121");
function b121(arr) {
  let result = arr.reduce(
    (init, value) => (value.length > init.length ? value : init),
    ""
  );
  rsb121.innerText = `Result: ${result}`;
}
b121(["js", "cssss", "html"]);
