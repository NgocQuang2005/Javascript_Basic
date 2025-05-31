let result = document.getElementById("triangle");
function triangleArea() {
  let a = 5;
  let b = 6;
  let c = 7;
  let cv = (a + b + c) / 2;
  let dt = Math.sqrt(cv * (cv - a) * (cv - b) * (cv - c));
  result.innerText = `result: ${dt}`;
}
triangleArea();
