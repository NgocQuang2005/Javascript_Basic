//Viết chương trình JavaScript để đơn giản hóa đường dẫn tuyệt đối cho một tệp theo kiểu Unix.
let rsb138 = document.getElementById("rsb138");
function b138(str) {
  let strSplit = str.split("/");
  let newStr = [];
  for (let strs of strSplit) {
    if (strs === "" || strs === "." || strs === "..") {
      continue;
    } else {
      newStr.push(strs + "/");
    }
  }
  let result = newStr.join("");
  rsb138.innerText = `Result: ${result.slice(0, result.length - 1)}`;
}
b138("/home/var/./www/../html//sql/");
