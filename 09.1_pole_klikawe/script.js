let fields = document.querySelectorAll('.fieldSlot');


fields.forEach(function (field) {
    field.addEventListener('click', e => handleClick(e, field))
})


function handleClick(e, field) {

    console.log(e)

    if (e.ctrlKey){
        field.classList.toggle('carrot');
    } else{
        field.classList.toggle('hydrated')
    }
}


document.addEventListener('keydown', e => deleteAll(e))

function deleteAll(e) {

    if (e.key !== "r")
        return;

    console.log("deleted");

    fields.forEach(function (field) {
        field.classList.remove('hydrated');
        field.classList.remove('carrot');
        field.innerHTML = null;
    })
}