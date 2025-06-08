//Viết chương trình JavaScript để hoán đổi các cặp chữ số liền kề của một số nguyên có độ dài chẵn cho trước.
let rsb146 = document.getElementById("rsb146");
function b146(num) {
  let cvNum = num.toString();
  if (cvNum.length % 2 === 0) {
    let result = "";
    for (let i = 0; i < cvNum.length; i += 2) {
      result += cvNum[i + 1] + cvNum[i];
    }
    rsb146.innerText = `Result: ${Number(result)}`;
  } else {
    rsb146.innerText = "Result: False";
  }
}
b146(123456);
