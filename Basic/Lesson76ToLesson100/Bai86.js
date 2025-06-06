/*
Viết chương trình JavaScript để kiểm tra xem có thể thay thế $ trong một biểu thức x $ y = z bằng một trong bốn dấu +, -, * hoặc / để thu được biểu thức đúng hay không.  
Ví dụ x = 10, y = 30 và z = 300, ta có thể thay $ bằng toán tử bội (*) để thu được x * y = z
*/
let rsb86 = document.getElementById("rsb86");
let numberb86a = document.getElementById("numberb86a");
let numberb86b = document.getElementById("numberb86b");
let numberb86c = document.getElementById("numberb86c");
function b86() {
  let a = Number(numberb86a.value);
  let b = Number(numberb86b.value);
  let c = Number(numberb86c.value);
  if (!isNaN(a, b, c)) {
    if (a + b == c || a - b == c || a * b == c || a / b == c) {
      rsb86.innerText = "Result: True";
      numberb86a.value = "";
      numberb86b.value = "";
      numberb86c.value = "";
    } else {
      rsb86.innerText = "Result: False";
      numberb86a.value = "";
      numberb86b.value = "";
      numberb86c.value = "";
    }
  } else {
    alert("vui lòng nhập vào ký tự là số");
    numberb86a.value = "";
    numberb86b.value = "";
    numberb86c.value = "";
  }
}
