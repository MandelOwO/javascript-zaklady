let spaceCount = 0
let escapeCount = 0
let enterCount = 0

let spaceDisplay = document.querySelector('#space')
let enterDisplay = document.querySelector('#enter')
let escapeDisplay = document.querySelector('#escape')


document.addEventListener('keypress', countKey)

function countKey(e) {
    console.log(e)

    if (e.key === " "){
        if (!e.ctrlKey){
            countSpace(1)
        }else{
            countSpace(-1)
        }

    } else if(e.key === "Escape"){
        if (!e.ctrlKey){
            countEscape(1)
        }else{
            countEnter(-1)
        }

    }else if (e.key === "Enter"){
        if (!e.ctrlKey){
            countEnter(1)
        }else{
            countEnter(-1)
        }
    }
}

function countSpace(action) {
    spaceCount += action
    console.log(`You pressed space, count: ${spaceCount}` )

    spaceDisplay.innerHTML = spaceCount

    if (action === 1 ){
        blink(spaceDisplay, 'add')
    } else {
        blink(spaceDisplay, 'remove')
    }
}

function countEscape(action){
    escapeCount += action
    console.log(`You pressed escape, count: ${escapeCount}` )

    escapeDisplay.innerHTML = escapeCount

    if (action === 1 ){
        blink(escapeDisplay, 'add')
    } else {
        blink(escapeDisplay, 'remove')
    }

}

function countEnter(action) {
    enterCount += action
    console.log(`You pressed enter, count: ${enterCount}` )

    enterDisplay.innerHTML = enterCount

    if (action === 1 ){
        blink(enterDisplay, 'add')
    } else {
        blink(enterDisplay, 'remove')
    }

}

function blink(element, className) {
    // console.log(element.parentElement)

    element.parentElement.classList.add(className)

    setTimeout(function () {
        element.parentElement.classList.remove(className)
    }, 100)
}
