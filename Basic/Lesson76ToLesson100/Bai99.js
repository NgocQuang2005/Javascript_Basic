//Viết chương trình JavaScript để tìm số lớn nhất của một số nguyên dương cho trước bằng cách xóa đúng một chữ số của số đã cho.
let rsb99 = document.getElementById("rsb99");

function b99(number) {
  let result = 0;
  let str = number.toString();
  for (let i = 0; i < str.length; i++) {
    let newStr = str.slice(0, i) + str.slice(i + 1);
    let num = parseInt(newStr);
    if (num > result) {
      result = num;
    }
  }
  rsb99.innerText = `Result: ${result}`;
}
b99(1245);
