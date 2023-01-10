let buttons = document.querySelectorAll('.button')

buttons.forEach(addListener)

function addListener(item) {
    item.addEventListener('click', changeColor)
}

function changeColor() {
    this.classList.toggle('active')
}