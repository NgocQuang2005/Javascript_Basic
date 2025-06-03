//
let strb35 = document.getElementById("strb35");
let rsb35 = document.getElementById("rsb35");
function b35() {
  let str = strb35.value;
  if (str.length < 3) {
    rsb35.innerText = `Result: ${str.toUpperCase()}`;
    strb35.value = "";
  } else {
    rsb35.innerText = `Result: ${str
      .substring(0, 3)
      .toUpperCase()}${str.substring(3, str.length)}`;
    strb35.value = "";
  }
}
let ax = "abcde";
let axx = ax.split("");
