//Viết chương trình JavaScript để hoán đổi hai nửa của một mảng số nguyên có độ dài chẵn cho trước.

let rsb144 = document.getElementById("rsb144");
function b144(arr) {
  let x;
  if (arr.length % 2 == 0) {
    let mid = arr.length / 2;
    let arr1 = arr.slice(0, mid);
    let arr2 = arr.slice(mid);
    x = arr2.concat(arr1);
  }
  rsb144.innerText = `Result: ${x}`;
}
b144([1, 2, 3, 4, 5, 6]);
