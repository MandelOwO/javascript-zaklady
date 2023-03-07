let btn = document.querySelector('button');
let dateContainer = document.querySelector('p');
let progress = document.querySelector('progress')

btn.addEventListener('click', e => updateDate(e))

function updateDate(e) {

    // pracuje jen s časem nastaveným lokálně na počítači
    let date = new Date();

    // date.get<a co chceme>
    dateContainer.innerText =
        date.getHours().toString().padStart(2, '0') + ':'
        + date.getMinutes().toString().padStart(2, '0') + ':'
        + date.getSeconds().toString().padStart(2, '0')
    ;
    // stejně tak ho můžeme nastavit

    progress.value = 0;
}

setTimeout(function () {
    // alert('uběhlo 5s');
    // clearInterval(intervalId1);
    // clearInterval(intervalId2);
}, 5000);

let intervalId1 = setInterval(updateDate, 1000);

let intervalId2 = setInterval(function () {
    progress.value += 1;
}, 1);

