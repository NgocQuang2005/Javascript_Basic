//Viết chương trình JavaScript để đảo ngược các bit của số nguyên ngắn không dấu 16 bit đã cho.
let rsb134 = document.getElementById("rsb134");
let numberb134 = document.getElementById("numberb134");

function b134() {
  let num = Number(numberb134.value);
  if (!isNaN(num)) {
    let numCv = num.toString(2);
    let bitt = "";
    for (let i = 0; i < 16 - numCv.length; i++) {
      bitt += "0";
    }
    let bitStr16 = bitt + numCv;
    let reverseBit = bitStr16.split("").reverse().join("");
    let convetBit = parseInt(reverseBit, 2);
    rsb134.innerText = `Result: ${convetBit}`;
    numberb134.value = "";
  } else {
    alert("Vui lòng nhập vào 1 số");
    numberb134.value = "";
  }
}
