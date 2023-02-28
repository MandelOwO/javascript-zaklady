let tableBody = document.querySelector('#tableBody');
let inputName = document.querySelector('#name');
let inputPcs = document.querySelector('#pcs');
let inputPrice = document.querySelector('#price');
let submitBtn = document.querySelector('#btnAdd');
let totalPcsView = document.querySelector('#totalPcs');
let totalPriceView = document.querySelector('#totalPrice');

let totalPrice = 0;
let totalPcs = 0;

submitBtn.addEventListener('click', e => addItem(e))


function addItem(e) {

    if (!isValid())
        return;

    let row = document.createElement('tr');

    let name = document.createElement('td');
    name.innerText = inputName.value;

    let price = document.createElement('td');
    price.innerText = `${inputPrice.value} Kč`;

    let pcs = document.createElement('td');
    pcs.innerText = `${inputPcs.value} Ks`;

    let subTotal = document.createElement('td');

    subTotal.innerText = `${inputPrice.value * inputPcs.value} Kč`;

    tableBody.appendChild(row);
    row.appendChild(name);
    row.appendChild(price);
    row.appendChild(pcs);
    row.appendChild(subTotal);

    countTotal();
}

function countTotal() {
    totalPrice = totalPrice + Number(inputPrice.value);
    totalPcs = totalPcs + Number(inputPcs.value);

    totalPriceView.innerText = totalPrice;
    totalPcsView.innerText = totalPcs;
}

function isValid() {
    if (inputName.value.trim() === '') {
        return false;
    }

    if (!typeof Number(inputPcs.value)) { //todo
        console.log("pics no")
        return false;
    }

    if (!typeof Number(inputPrice.value)) {
        console.log("price no")
        return false;
    }

    console.log("valid")
    return true;

}