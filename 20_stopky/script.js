let timeDisplay = document.querySelector("#time-display");
let btnStart = document.querySelector("#btn-start");
let btnStop = document.querySelector("#btn-stop");
let btnLap = document.querySelector("#btn-lap");
let btnClear = document.querySelector("#btn-clear");
let lapList = document.querySelector("#laps-list");

let startTime;
let interval;
let currentTime;

btnStop.disabled = true;
btnLap.disabled = true;

btnStart.addEventListener('click', function () {
    startTime = new Date();
    btnStart.disabled = true;
    btnStop.disabled = false;
    btnLap.disabled = false;
    btnStart.innerText = 'START';
    startStopwatch();
})

btnStop.addEventListener('click', function () {
    btnStart.disabled = false;
    btnStop.disabled = true;
    btnLap.disabled = true;
    btnStart.innerText = 'RESTART';
    clearInterval(interval)
})

btnLap.addEventListener('click', function () {
    let lapString = getTimeString();

    let lapItem = document.createElement('li');
    lapItem.innerText = lapString;
    lapItem.classList.add('lap');
    lapList.appendChild(lapItem);
})

btnClear.addEventListener('click', function () {
    document.querySelectorAll('.lap').forEach(function (element) {
        element.remove();
    })
})


function startStopwatch() {
    interval = setInterval(function () {
        currentTime = new Date(new Date() - startTime);
        timeDisplay.innerText = getTimeString();
    }, 1)
}

function getTimeString() {
    return `${currentTime.getUTCHours().toString().padStart(2, '0')}:${currentTime.getUTCMinutes().toString().padStart(2, '0')}:${currentTime.getUTCSeconds().toString().padStart(2, '0')}.${currentTime.getUTCMilliseconds().toString().padStart(3, '0')}`;
}

