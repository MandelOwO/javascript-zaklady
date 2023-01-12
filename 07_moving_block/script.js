let block = document.querySelector('#block');

let width = 100;
let height = 100;

block.style.width = `${width}px`;
block.style.height = `${height}px`;

let isHeld = false

block.addEventListener('mousedown', e => {
    isHeld = true;
    block.classList.add('rotate');
})


document.addEventListener('mouseup', e => {
    isHeld = false;
    block.classList.remove('rotate');
})


document.addEventListener('mousemove', e => {
       if (isHeld) {
           block.style.left = `${e.x - width/2}px`;
           block.style.top = `${e.y - height/2}px`;
       }
})