//Còn bao nhiêu ngày nữa đến giáng sinh;
function daysUntilChristmas() {
  let christmasElm = document.getElementById("christmas");
  const today = new Date();
  const year = today.getFullYear();
  let christmas = new Date(year, 11, 25);

  if (today > christmas) {
    christmas = new Date(year + 1, 11, 25);
  }
  const diffTime = christmas - today;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return (christmasElm.innerText = `Còn ${diffDays} ngày nữa đến Giáng Sinh!`);
}
daysUntilChristmas();
