let circleLeft = document.querySelector('#redL');
let circleRight = document.querySelector('#redR');
let circleBott = document.querySelector('#white');
let btn = document.querySelector('button');

let audio = new Audio('WindowsDing.wav');
audio.preload = 'auto';

let train = false;

btn.addEventListener('click', function (e) {
    if (train) {

        circleLeft.classList.remove('redFill');
        circleRight.classList.remove('redFill');
        btn.innerHTML = 'VLAK!';
        train = false
    } else {
        circleLeft.classList.add('redFill');
        circleBott.classList.remove('whiteFill')
        btn.innerHTML = 'VOLNO';

        train = true;
    }
});

setInterval(flash, 500);

function flash() {

    if (!train) {
        circleBott.classList.toggle('whiteFill')
    } else {
        audio.currentTime = 0;
        audio.play();


        circleLeft.classList.toggle('redFill');
        circleRight.classList.toggle('redFill');
    }
}




