//Viết một chương trình JavaScript để kiểm tra xem ba số đã cho có tăng theo chế độ nghiêm ngặt hay chế độ mềm không. Lưu ý: Chế độ nghiêm ngặt -> 10, 15, 31: Chế độ mềm -> 24, 22, 31 hoặc 22, 22, 31
let numberb40a = document.getElementById("numberb40a");
let numberb40b = document.getElementById("numberb40b");
let numberb40c = document.getElementById("numberb40c");
let rsb40 = document.getElementById("rsb40");
function b40() {
  let a = Number(numberb40a.value);
  let b = Number(numberb40b.value);
  let c = Number(numberb40c.value);

  if (!isNaN(a, b, c)) {
    if (b > a && c > b) {
      rsb40.innerText = "Result: Strict mode";
      numberb40a.value = "";
      numberb40b.value = "";
      numberb40c.value = "";
    } else if (c > b) {
      rsb40.innerText = "Result: Soft mode";
      numberb40a.value = "";
      numberb40b.value = "";
      numberb40c.value = "";
    } else {
      rsb40.innerText = "Result: No";
      numberb40a.value = "";
      numberb40b.value = "";
      numberb40c.value = "";
    }
  } else {
    alert("vui lòng nhập số");
    numberb40a.value = "";
    numberb40b.value = "";
    numberb40c.value = "";
  }
}
