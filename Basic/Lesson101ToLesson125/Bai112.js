//Viết chương trình JavaScript để tìm tất cả các tùy chọn có thể thay thế hàm băm trong một chuỗi (Gồm các chữ số và một hàm băm (#)) bằng một chữ số để tạo ra một số nguyên chia hết cho 3.
let rsb112 = document.getElementById("rsb112");
function b112(mask_str) {
  let arrStr = mask_str.split("");
  let newArr = [];
  for (let i = 0; i < arrStr.length; i++) {
    if (arrStr[i] === "#") {
      for (let j = 0; j < 10; j++) {
        arrStr[i] = j;
        let x = parseInt(arrStr.join(""));
        if (x % 3 === 0) {
          newArr.push(x);
        }
      }
    }
  }
  let result = newArr.map((vl) => vl.toString());
  rsb112.innerText = `Result: [${result}]`;
}
b112("2#0");
