//Viết chương trình JavaScript để đảo ngược các bit của số nguyên ngắn không dấu 16 bit đã cho.
let rsb134 = document.getElementById("rsb134");
let numberb134 = document.getElementById("numberb134");

function b134() {
  let num = Number(numberb134.value);
  if (!isNaN(num)) {
    let result = 0;
    for (let i = 0; i < 16; i++) {
      console.log("aaaa");
    }
  } else {
    alert("Vui lòng nhập vào 1 số");
    numberb134.value = "";
  }
}
