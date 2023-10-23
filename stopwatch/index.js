const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");
const appendtens = document.getElementById("tens");
const appendseconds = document.getElementById("seconds");
let seconds = 0;
let tens = 0;
let timeoutId;

start.addEventListener('click', () => {
    clearInterval(timeoutId);
    timeoutId = setInterval(startTimer, 10);
});

stop.addEventListener('click', () => {
    clearInterval(timeoutId);
});

reset.addEventListener('click', () => {
    clearInterval(timeoutId);
    tens = 0;
    seconds = 0;
    appendtens.innerText = "0" + tens;
    appendseconds.innerText = "0" + seconds;
});

function startTimer() {
    tens++;
    if(tens<=9) {
        appendtens.innerText = "0" + tens;
    }
    if(tens>9) {
        appendtens.innerText = tens;
    }

    if(tens > 99) {
        seconds++;
        appendseconds.innerText = "0" + seconds;
        tens=0;
        appendtens.innerText = "0" + tens;
    }

    if(seconds > 9) {
        appendseconds.innerText = seconds;
    }
}
