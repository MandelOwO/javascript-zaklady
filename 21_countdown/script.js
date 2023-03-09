const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const day = document.querySelector(".day .number");
const month = document.querySelector(".month .number");
const year = document.querySelector(".year .number");

const hours = document.querySelector(".hours .number");
const minutes = document.querySelector(".minutes .number");
const seconds = document.querySelector(".seconds .number");

let currentDay = 1;
let currentMonth = 0;
let currentYear = new Date().getFullYear();
let currentHours = 0;
let currentMinutes = 0;
let currentSeconds = 0;

function updateDate() {
    const date = new Date(currentYear, currentMonth, currentDay);
    day.textContent = days[date.getDay()] + ", " + currentDay.toString().padStart(2, "0");
    month.textContent = months[currentMonth];
    year.textContent = currentYear;
}

function updateHours() {
    hours.textContent = currentHours.toString().padStart(2, "0");
}

function updateMinutes() {
    minutes.textContent = currentMinutes.toString().padStart(2, "0");
}

function updateSeconds() {
    seconds.textContent = currentSeconds.toString().padStart(2, "0");
}

function incrementDay() {
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    currentDay = (currentDay + 1) % (daysInMonth + 1);
    if (currentDay === 0) {
        currentDay = 1;
        incrementMonth();
    }
    updateDate();
}

function decrementDay() {
    currentDay--;
    if (currentDay === 0) {
        currentMonth--;
        if (currentMonth === -1) {
            currentYear--;
            currentMonth = 11;
        }
        currentDay = new Date(currentYear, currentMonth + 1, 0).getDate();
    }
    updateDate();
}

function incrementMonth() {
    currentMonth++;
    if (currentMonth === 12) {
        currentYear++;
        currentMonth = 0;
    }
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    if (currentDay > daysInMonth) {
        currentDay = daysInMonth;
    }
    updateDate();
}

function decrementMonth() {
    currentMonth--;
    if (currentMonth === -1) {
        currentYear--;
        currentMonth = 11;
    }
    updateDate();
}

function incrementYear() {
    currentYear++;
    updateDate();
}

function decrementYear() {
    currentYear--;
    updateDate();
}

function incrementHours() {
    currentHours = (currentHours + 1) % 24;
    updateHours();
}

function decrementHours() {
    currentHours--;
    if (currentHours === -1) {
        currentHours = 23;
    }
    updateHours();
}

function incrementMinutes() {
    currentMinutes = (currentMinutes + 1) % 60;
    updateMinutes();
}

function decrementMinutes() {
    currentMinutes--;
    if (currentMinutes === -1) {
        currentMinutes = 59;
    }
    updateMinutes();
}

function incrementSeconds() {
    currentSeconds = (currentSeconds + 1) % 60;
    updateSeconds();
}

function decrementSeconds() {
    currentSeconds--;
    if (currentSeconds === -1) {
        currentSeconds = 59;
    }
    updateSeconds();
}

function calculateRemainingTime() {
    const currentDate = new Date();
    const pickedDate = new Date(currentYear, currentMonth, currentDay, currentHours, currentMinutes, currentSeconds);
    const remainingTime = new Date(pickedDate.getTime() - currentDate.getTime());

    if (remainingTime > 0) {
        const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
        
        const remainingTimeDisplay = `${days}d ${remainingTime.getUTCHours().toString().padStart(2, '0')}h ${remainingTime.getUTCMinutes().toString().padStart(2, '0')}m ${remainingTime.getUTCSeconds().toString().padStart(2, '0')}s`;
        document.querySelector('.remaining-time').textContent = remainingTimeDisplay;
    } else {
        document.querySelector('.remaining-time').textContent = 'Time is up!';
    }
}

setInterval(calculateRemainingTime, 1);

document.querySelector(".day .up").addEventListener("click", incrementDay);
document.querySelector(".day .down").addEventListener("click", decrementDay);
document.querySelector(".month .up").addEventListener("click", incrementMonth);
document.querySelector(".month .down").addEventListener("click", decrementMonth);
document.querySelector(".year .up").addEventListener("click", incrementYear);
document.querySelector(".year .down").addEventListener("click", decrementYear);

document.querySelector(".hours .up").addEventListener("click", incrementHours);
document.querySelector(".hours .down").addEventListener("click", decrementHours);
document.querySelector(".minutes .up").addEventListener("click", incrementMinutes);
document.querySelector(".minutes .down").addEventListener("click", decrementMinutes);
document.querySelector(".seconds .up").addEventListener("click", incrementSeconds);
document.querySelector(".seconds .down").addEventListener("click", decrementSeconds);

updateDate();
updateHours();
updateMinutes();
updateSeconds();