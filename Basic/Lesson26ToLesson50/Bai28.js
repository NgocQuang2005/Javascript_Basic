let strb28 = document.getElementById("strb28");
let rsb28 = document.getElementById("rsb28");
function b28() {
  let str = strb28.value;
  if (str.substring(10, 4) == "Script") {
    rsb28.innerText = `Result: ${str.substring(0, 4)}${str.substring(
      10,
      str.length
    )}`;
    strb28.value = "";
  } else {
    rsb28.innerText = `Result: ${str}`;
    strb28.value = "";
  }
}
