//Viết một ứng dụng JavaScript chuyển đổi một giá trị số được cung cấp thành giờ và phút.
let valueb49 = document.getElementById("valueb49");
let rsb49 = document.getElementById("rsb49");
function b49() {
  let vl = Number(valueb49.value);
  if (!isNaN(vl)) {
    let hour = Math.floor(vl / 60);
    let minutes = vl % 60;
    rsb49.innerText = `Result: ${hour}:${minutes}`;
    valueb49.value = "";
  } else {
    alert("vui lòng nhập giá trị là số để chuyển đổi");
    valueb49.value = "";
  }
}
