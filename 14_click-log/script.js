let list = document.querySelector('#list')

document.addEventListener('click', function (e) {

    let line = document.createElement('p')
    line.innerHTML = `click X: ${e.x} Y: ${e.y}`

    list.insertBefore(line, list.firstElementChild);

    line.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16)
})

let secret = document.querySelector('#clickme')

secret.addEventListener('click', function () {


    setInterval(function () {
        let line = document.createElement('p')
        line.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16)
        list.insertBefore(line, list.firstElementChild);
    }, 100)

})