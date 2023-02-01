let btn = document.querySelector('button')
let h2 = document.querySelector('h2')
let container = document.querySelector('#paras')
let count = 0

btn.addEventListener('click', function (e) {
    count++

    let newP = document.createElement('p')
    // console.log(newP)
    newP.innerHTML = "textík" + count

    newP.dataset.order = count;

    // container.appendChild(newP)
    // container.insertBefore(newP, h2)
    // existuje i container.replacechild(new, old)
    container.insertBefore(newP, container.firstElementChild)
    /*** Používat vlastnosti, kde je slovo "Element"... firstChild by mohlo vrátit něco jinýho... ***/

    newP.addEventListener('dblclick', function (e) {
        // this.remove()
        alert(this.dataset.order)
    })

    // console.log(newP.parentElement)
    // console.log(newP.previousElementSibling)
    // console.log(newP.nextElementSibling)
})