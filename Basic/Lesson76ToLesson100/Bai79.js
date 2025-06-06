//Viết chương trình JavaScript để cộng hai số nguyên dương không nhớ.
let rsb79 = document.getElementById("rsb79");
let numberb79a = document.getElementById("numberb79a");
let numberb79b = document.getElementById("numberb79b");
function b79() {
  let nba = numberb79a.value;
  let nbb = numberb79b.value;
  if (!isNaN(nba, nbb)) {
    let a = nba.split("");
    let b = nbb.split("");
    let kq = [];
    for (let i = 0; i < a.length; i++) {
      let sum = Number(a[i]) + Number(b[i]);
      kq.push(sum);
    }
    rsb79.innerText = `Result: ${Number(kq.join(""))}`;
    numberb79a.value = "";
    numberb79b.value = "";
  }
}
