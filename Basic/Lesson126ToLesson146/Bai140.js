//Viết chương trình JavaScript để ngắt một địa chỉ URL và đặt các phần của nó vào một mảng.

let rsb140 = document.getElementById("rsb140");
function b140(str) {
  let result = [];
  let arrStr = str.split("/");
  for (let i = 0; i < arrStr.length; i++) {
    if (arrStr[i].endsWith(":")) {
      let ok = arrStr[i].slice(0, arrStr[i].length - 1);
      result.push(ok);
    } else if (arrStr[i] !== "") {
      result.push(arrStr[i]);
    }
  }
  console.log(result);
}
b140("https://www.w3resource.com/javascript-exercises/");
