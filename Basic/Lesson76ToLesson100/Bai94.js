//Viết chương trình JavaScript để thay đổi trường hợp của số lượng chữ cái tối thiểu để tạo thành một chuỗi nhất định được viết bằng chữ hoa hoặc chữ thường.Ví dụ Fox "Write" sẽ được viết và "PHp" sẽ là "PHP"
let rsb94 = document.getElementById("rsb94");
function b94(str) {
  let a = 0;
  let b = 0;
  for (let i = 0; i < str.length; i++) {
    if (/[A-Z]/.test(str[i])) {
      a++;
    } else {
      b++;
    }
  }
  let x = str.split("");
  let kq = x
    .map((value) => {
      return a > b ? value.toUpperCase() : value.toLowerCase();
    })
    .join("");
  rsb94.innerText = `Result: ${kq}`;
}
b94("KSFSAds");
