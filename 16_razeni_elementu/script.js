let input = document.querySelector("#input");
let button = document.querySelector("#button");
let list = document.querySelector("#list");

button.addEventListener('click', addItem);


function addItem() {
    let text = input.value.trim();
    if (!checkInput(text)) {
        return;
    }

    let item = document.createElement("li");
    let innerText = document.createTextNode(text + ' [');

    let del = document.createElement('a');
    del.innerText = 'X';
    del.href = "#";

    del.addEventListener('click', e => removeItem(e, item));

    item.appendChild(innerText);
    item.appendChild(del);

    item.appendChild(document.createTextNode(']'));


    list.appendChild(item);
    input.value = "";
}


function removeItem(e, item) {
    console.log(item)
    item.remove();
}

function checkInput(text) {
    if (text === "") {
        return false;
    }
    return true;
}


