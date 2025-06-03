//Chương trình JavaScript này chia hai số dương và định dạng kết quả bằng dấu phẩy cho hàng nghìn, hàng triệu, v.v. Trước tiên, chương trình thực hiện phép chia và sau đó chuyển đổi kết quả thành chuỗi có thêm dấu phẩy ở những vị trí thích hợp để dễ đọc hơn.
let numberb54a = document.getElementById("numberb54a");
let numberb54b = document.getElementById("numberb54b");
let rsb54 = document.getElementById("rsb54");
function b54() {
  let nba = Number(numberb54a.value);
  let nbb = Number(numberb54b.value);
  if (!isNaN(nba, nbb)) {
    let chia = nba / nbb;
    let rs = chia.toLocaleString("en-US");
    rsb54.innerText = `Result: ${rs}`;
    numberb54a.value = "";
    numberb54b.value = "";
  } else {
    alert("Vui lòng nhập vào số");
    numberb54a.value = "";
    numberb54b.value = "";
  }
}
