let input = document.querySelector("#input");
let button = document.querySelector("#button");
let list = document.querySelector("#list");
let err = document.querySelector("#error");

button.addEventListener('click', addItem);

function addItem() {
    err.innerText = '';
    let text = input.value.trim();
    if (!checkInput(text)) {
        return;
    }

    let item = document.createElement("li");

    let del = document.createElement('a');
    del.innerText = 'X';
    del.href = "#";
    del.addEventListener('click', e => removeItem(item));

    let up = document.createElement('a');
    up.innerText = '↑';
    up.href = "#";
    up.addEventListener('click', e => moveUp(item));

    let down = document.createElement('a');
    down.innerText = '↓';
    down.href = "#";
    down.addEventListener('click', e => moveDown(item));

    item.appendChild(document.createTextNode(text + ' ['));
    item.appendChild(up);
    item.appendChild(document.createTextNode(' | '))
    item.appendChild(down);
    item.appendChild(document.createTextNode(' | '))
    item.appendChild(del);
    item.appendChild(document.createTextNode(']'));


    list.appendChild(item);
    input.value = "";
}

function moveUp(item) {
    if (!item.previousElementSibling) {
        err.innerText = 'To nejde';
        return;
    }
    err.innerText = '';
    item.parentNode.insertBefore(item, item.previousElementSibling);
}

function moveDown(item) {
    if (!item.nextElementSibling) {
        err.innerText = 'To nejde';
        return;
    }
    err.innerText = '';
    item.parentNode.insertBefore(item, item.nextElementSibling.nextElementSibling);
}

function removeItem(item) {
    console.log(item)
    item.remove();
}

function checkInput(text) {
    if (text === "") {
        err.innerText = 'To nejde';
        return false;
    }
    err.innerText = '';
    return true;
}