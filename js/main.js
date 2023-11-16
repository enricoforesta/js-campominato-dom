"use strict"

// Funzioni

// Funzione principale
function campoMinatoFunc() {
    resetFunc()
    const containerGrid = document.querySelector(".container-main");
    containerGrid.classList.remove("d-none")
    console.log({ containerGrid });

    const level = document.getElementById("select");
    const levelValue = +level.value;
    console.log(levelValue)

    const numeroCell = numeroCellFunc(levelValue);
    console.log(numeroCell);

    gridFunc(containerGrid, numeroCell, "bg");


    const bombArray = randomFunc(numeroCell);
    console.log(bombArray)

}
// Funzione numero casuali
function randomFunc(cellNumber) {
    const bombArray = [];

    for (let i = 0; i < 16; i++) {
        const random = Math.round(Math.random() * cellNumber + 1);
        bombArray.push(random);
    }
    return bombArray;
}



//Funzione per creare un singolo elemento
function createElementFunc(tag, className, content) {
    const element = document.createElement(tag);
    element.classList.add(className);
    element.append(content);
    return element;
}

// Funzione per i livelli
function numeroCellFunc(level) {
    let numeroCell = 0;
    switch (level) {
        case 2:
            numeroCell = 81;
            break;
        case 3:
            numeroCell = 49;
            break;
        case 1:
        default:
            numeroCell = 100;
            break;
    }
    return numeroCell;

}

//Funzioni per le celle
function gridFunc(mainElement, cellNumber, className) {

    for (let i = 1; i <= cellNumber; i++) {
        const createElement = createElementFunc("div", "cell", i);
        createElement.classList.add(`cell-${cellNumber}`)
        createElement.addEventListener("click", function () {
            createElement.classList.add(className)
            console.log(`Ho cliccato ${i}`)
        })
        mainElement.append(createElement)
    }
}

// Funzione per resettare
function resetFunc() {
    const containerGrid = document.querySelector(".container-main");
    containerGrid.innerHTML = "";
}


/*------------------------------------------------*/

// Operazioni
const start = document.querySelector(".button");
start.addEventListener("click", campoMinatoFunc);



