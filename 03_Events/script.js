
let paras = document.querySelectorAll('p');
let checkbox = document.querySelector('input[type=checkbox]')

checkbox.addEventListener('change', function (e) {
    if (this.checked){
        addListeners();
    } else  {
        removeListeners();
    }
})

function addListeners() {
    paras.forEach(function (p) {
        p.addEventListener('click', changePara)
    })
}

function removeListeners() {
paras.forEach(function (p) {
    p.removeEventListener('click', changePara)
})
}

function changePara() {
    this.classList.toggle('yellow')
}

