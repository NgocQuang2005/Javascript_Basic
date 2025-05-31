//Xóa ký tự ở vị trí được chỉ định trong chuỗi
let strb20 = document.getElementById("strb20");
let indexb20 = document.getElementById("indexb20");
let rsb20 = document.getElementById("rsb20");
function b20() {
  let str = strb20.value;
  let index = Number(indexb20.value);
  let resultArr = [];
  if (!isNaN(indexb20.value)) {
    for (let i = 0; i < str.length; i++) {
      if (index < str.length && index == i) {
        strb20.value = "";
        indexb20.value = "";
      } else {
        resultArr.push(str[i]);
        strb20.value = "";
        indexb20.value = "";
      }
    }
  } else {
    alert("vui lòng nhập vị trí là số");
    indexb20.value = "";
  }
  return (rsb20.innerText = `Result: ${resultArr.join("")}`);
}
