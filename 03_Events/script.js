
let paras = document.querySelectorAll('p');
let checkbox = document.querySelector('input[type=checkbox]')

checkbox.addEventListener('change', function () {
    if (this.checked){
        addListeners();
    } else  {
        removeListeners();
    }
})

function addListeners() {
    paras.forEach(addListener)
}

function addListener(item) {
    item.addEventListener('click', changePara)
}

function removeListeners() {
    paras.forEach(function (p) {
        p.removeEventListener('click', changePara)
    })
}

function changePara() {
    this.classList.toggle('yellow')
}