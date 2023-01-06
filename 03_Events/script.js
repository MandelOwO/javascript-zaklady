// Nestihli jsme dokončit


let paras = document.querySelectorAll('p');
let checkbox = document.querySelector('input[type=checkbox]')

paras.forEach(function (p) {
    p.addEventListener('click', changePara)
})


function changePara() {
    this.classList.toggle('yellow')
}

