//Viết chương trình JavaScript để tìm số chữ số chẵn trong một số nguyên cho trước.
let rsb126 = document.getElementById("rsb126");
function b126(number) {
  let convert = number.toString().split("");
  let kq = convert.filter((value) => value % 2 === 0);
  rsb126.innerText = `Result: [${kq}]`;
}
b126(1245);
