let container = document.querySelector("#canvas");

function makeRows(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);

    for (let c = 0; c < (rows * cols); c++) {
        let cell = document.createElement("div");
        container.appendChild(cell).className = "grid-item";
        cell.addEventListener('click', cellClick)
    }
}

makeRows(50, 50);

function cellClick() {
    this.style.backgroundColor = 'black';
}