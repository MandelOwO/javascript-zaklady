let canvas = document.querySelector("#canvas");
let colorPicker = document.querySelector("#colorPicker")
let cells = [];

let mouseDown = false;
let color = "#000";

colorPicker.value = "#000"


function makeRows(rows, cols) {
    canvas.style.setProperty('--grid-rows', rows);
    canvas.style.setProperty('--grid-cols', cols);

    for (let c = 0; c < (rows * cols); c++) {
        let cell = document.createElement("div");
        canvas.appendChild(cell).className = "grid-item";
        cell.addEventListener('mouseover', draw)
        cells.push(cell);
    }
}

makeRows(50, 50);

function draw() {
    if (!mouseDown)
        return;

    this.style.backgroundColor = color;
}

document.querySelector("#btnDelete").addEventListener('click', function () {
    cells.forEach(function (cell) {
        cell.style.backgroundColor = "#fff"
    })
})

document.addEventListener('mousedown', function () {
    mouseDown = true;
})

document.addEventListener('mouseup', function () {
    mouseDown = false;
})

colorPicker.addEventListener('input', function (e) {
    color = this.value;
    console.log(color);
})