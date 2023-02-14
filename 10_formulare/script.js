let inp = document.querySelector('#changer')
let h2 = document.querySelector('h2')

inp.addEventListener('keyup', inputChanged);


function inputChanged() {

   h2.innerText = inp.value; //da se taky použít i valueAsNumber, nebo valueAsDate

}


document.querySelector('button').addEventListener('click', function () {
    inp.value = '';
})


document.querySelector('input[type=checkbox]').addEventListener('change', function () {
    console.log(this.checked);
})

let select = document.querySelector('select')
select.addEventListener('change', function () {
    console.log(select)
})


let form = document.querySelector('form');
let inpName = document.querySelector('#name')

form.addEventListener('submit', function (e) {

    console.log(inpName);
    console.log(inpName.value);

    if (inpName.value === ''){
        console.log('prevented');
        e.preventDefault();
    }
})