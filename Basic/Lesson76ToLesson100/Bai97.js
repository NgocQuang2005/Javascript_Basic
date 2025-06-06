//Viết chương trình JavaScript để kiểm tra xem một chuỗi đã cho chỉ chứa các chữ cái Latinh và không có hai chữ hoa và chữ thường nào ở các vị trí liền kề hay không.
let rsb97 = document.getElementById("rsb97");
function b97(str) {
  function isUpperCase(value) {
    return value >= 65 && value <= 90;
  }
  function isLowerCase(value) {
    return value >= 97 && value <= 122;
  }
  let char = str.split("");
  for (let i = 0; i < char.length - 1; i++) {
    let a = char[i].charCodeAt(0);
    if (!isUpperCase(a) && !isLowerCase(a)) {
      rsb97.innerText = `Result: False`;
      return;
    }
    if (i < char.length - 1) {
      let b = char[i + 1].charCodeAt(0);
      if (
        (isUpperCase(a) && isLowerCase(b)) ||
        (isLowerCase(a) && isUpperCase(b))
      ) {
        rsb97.innerText = `Result: False`;
        return;
      }
    }
  }
  rsb97.innerText = `Result: True`;
}
b97("XXyx");
