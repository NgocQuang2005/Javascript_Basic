//Viết chương trình JavaScript để thay thế tất cả các số bằng một số được chỉ định trong một mảng số nguyên.

let rsb92 = document.getElementById("rsb92");
function b92(arr, value, new_value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      arr[i] = new_value;
    }
  }
  rsb92.innerText = `Result: [${arr}]`;
}
b92([2, 2, 3, 4, 2, 5], 2, 5);
