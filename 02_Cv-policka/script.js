let policka = document.querySelectorAll('.item');

policka.forEach(function (policko){
    // console.log(policko)
    policko.addEventListener('click', function () {
        this.classList.toggle('fill')
    })
})