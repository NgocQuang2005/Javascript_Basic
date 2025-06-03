//điểm sinh viên
let diemb36 = document.getElementById("diemb36");
let isCheckb36 = document.getElementById("isCheckb36");
let rsb36 = document.getElementById("rsb36");
function b36() {
  let diem = Number(diemb36.value);
  let isCheck = isCheckb36.value;
  if (isCheck) {
    rsb36.innerText = `Result: ${diem >= 90}`;
    diemb36.value = "";
    isCheckb36.value = "";
  }
  rsb36.innerText = `Result: ${diem >= 89 && diem <= 100}`;
  diemb36.value = "";
  isCheckb36.value = "";
}
