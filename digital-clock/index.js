let appendHours = document.getElementById("hours");
let appendMinutes = document.getElementById("minutes");
let appendSeconds = document.getElementById("seconds");

let timerId = setInterval(startTimer, 1000);

function startTimer() {
    const newDate = new Date();
    seconds =  newDate.getSeconds();
    minutes =  newDate.getMinutes();
    hours = newDate.getHours();
    appendSeconds.innerText = seconds <= 9 ? `0${seconds}` : seconds;
    appendMinutes.innerText = minutes <= 9 ? `0${minutes}` : minutes;
    appendHours.innerText = hours <= 9 ? `0${hours}` : hours;
}

startTimer();
