//Write a JavaScript exercise to get the filename extension.
function ExtensionOfFileName(str) {
  let resultb12 = document.getElementById("rsb12");
  let kq = str.split(".").pop(0);
  return (resultb12.innerText = `Result: ${kq}`);
}
ExtensionOfFileName("Bai12.js");
