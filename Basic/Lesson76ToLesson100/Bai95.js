//Viết chương trình JavaScript để kiểm tra xem có thể sắp xếp lại các ký tự của một chuỗi đã cho hay không. Bằng cách này, nó sẽ trở thành bằng một chuỗi đã cho khác.
let rsb95 = document.getElementById("rsb95");
function b95(str, str1) {
  if (str.length == str1.length) {
    let a = str.split("");
    let b = str1.split("");
    a.sort();
    b.sort();
    if (a.join("") == b.join("")) {
      rsb95.innerText = "Result: Đúng";
    } else {
      rsb95.innerText = "Result:Lại Sai";
    }
  } else {
    rsb95.innerText = "Result: Sai";
  }
}
b95("xyz", "zyx");
