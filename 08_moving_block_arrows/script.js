let block = document.querySelector('#block');

let width = 100;
let height = 100;

let positionX = 100;
let positionY = 100;

let speed = 10;

block.style.width = `${width}px`;
block.style.height = `${height}px`;

document.addEventListener('keydown', e => {
    switch (e.key) {
        case 'ArrowUp':
            console.log('up');
            moveBlock(0,-1);
            break;

        case 'ArrowDown':
            console.log('dwn');
            moveBlock(0,+1);
            break;

        case 'ArrowLeft':
            console.log('left');
            moveBlock(-1,0);
            break;

        case 'ArrowRight':
            console.log('right');
            moveBlock(+1,0);
            break;
    }
})

function moveBlock(x, y) {

    if (positionX + width >= window.innerWidth){
        x = -1;
    } else if (positionX <= 0 ){
        x = 1;
    } else if (positionY + height >= window.innerHeight){
        y = -1;
    } else if (positionY <= 0){
        y = 1;
    }


    positionX += x * speed;
    positionY += y * speed;

    console.log('x:',positionX,'y:', positionY)

    block.style.left = `${positionX}px`;
    block.style.top = `${positionY}px`;
}