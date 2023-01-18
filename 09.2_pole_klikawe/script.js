let fields = document.querySelectorAll('.fieldSlot');


fields.forEach(function (field) {
    field.addEventListener('click', handleClick)
})


function handleClick() {

    if (!this.classList.contains('hydrated') && !this.classList.contains('carrot')){
        this.classList.add('hydrated');

    }else if (this.classList.contains('hydrated')){
        this.classList.remove('hydrated');
        this.classList.add('carrot');

    }else if (this.classList.contains('carrot')){
        this.classList.remove('carrot');

        this.innerText++;

    }
}


document.addEventListener('keydown', e => deleteAll(e))

function deleteAll(e) {

    if (e.key !== "Escape")
        return;

    console.log("deleted");

    fields.forEach(function (field) {
        field.classList.remove('hydrated');
        field.classList.remove('carrot');
        field.innerHTML = null;
    })
}