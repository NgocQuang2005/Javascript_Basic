//Display Current Day and Time
let todayElm = document.getElementById("today");
let timeElm = document.getElementById("time");
let textToday = "Today is :";
let textDate = "Current time is :";
function getDate() {
  let date = new Date();
  let day = date.getDay();
  let hour = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let arrDay = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  todayElm.innerText = textToday + arrDay[day];
  setTimeout(function () {
    timeElm.innerHTML = `${textDate} ${
      hour < 10 ? "0" + hour + " AM" : hour + " PM"
    } : ${minutes < 10 ? "0" + minutes : minutes} : ${
      seconds < 10 ? "0" + seconds : seconds
    }`;
    getDate();
  }, 1000);
}
getDate();
