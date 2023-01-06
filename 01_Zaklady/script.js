// alert('Já tu nejsem');


function changeH1() {
        let color = '#' + Math.floor(Math.random() * 16777215).toString(16);
        console.log(color)
        document.body.style.backgroundColor = color;
}

let nadpis = document.querySelector('#dvojka');
nadpis.addEventListener('click', changeToYellow);

function changeToYellow() {


    if (nadpis.classList.contains('yellow')) {
        nadpis.classList.remove('yellow');
        // nadpis.innerText = '<u>sem</u> už jsi kliknul';
        nadpis.innerHTML = '<u>sem</u> už jsi kliknul';
    } else {
        nadpis.classList.add('yellow')
    }
}


// let => novější, modernější, lepší
// var => zastaralý, oldschool, horší

