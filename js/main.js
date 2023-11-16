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
    console.log("difficoltà " + levelValue)

    const numeroCell = numeroCellFunc(levelValue);
    console.log("range " + numeroCell);

    const bombArray = randomFunc(numeroCell);
    console.log(bombArray);

    gridFunc(containerGrid, numeroCell, "bg", "bg-bomb", bombArray);

}
// Funzione numero casuali
function randomFunc(cellNumber) {
    const bombArray = [];

    while (bombArray.length < numberBomb) {
        const random = Math.round(Math.random() * cellNumber + 1);

        if (!bombArray.includes(random)) {
            bombArray.push(random);
        }
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
function gridFunc(mainElement, cellNumber, className, classNameBomb, array) {
    let clickScore = 0;


    for (let i = 1; i <= cellNumber; i++) {
        const createElement = createElementFunc("div", "cell", i);
        createElement.classList.add(`cell-${cellNumber}`)
        createElement.addEventListener("click", function () {

            if (!createElement.classList.contains(classNameBomb) && !createElement.classList.contains(className)) {
                if (array.includes(i)) {
                    createElement.classList.add(classNameBomb)
                    endGameFunc(clickScore);

                } else {
                    createElement.classList.add(className)
                    clickScore++;
                    scoreUpFunc(clickScore);
                    if (clickScore === cellNumber - numberBomb) {
                        winGameFunc(clickScore);
                    }
                    console.log(`Ho cliccato ${i}`)
                }
            }
        })
        mainElement.append(createElement)
    }
}

// Funzione per resettare
function resetFunc() {
    const containerGrid = document.querySelector(".container-main");
    containerGrid.innerHTML = "";
}

//Funzione aggiornamento punteggio
function scoreUpFunc(score) {
    const scores = document.querySelector(".scores")
    scores.innerHTML = `Il tuo punteggio è ${score}` // ritorno risultato dal clickScore
}

//Funzione fine partita
function endGameFunc(end) {
    const scores = document.querySelector(".scores")
    scores.innerHTML += ` Mi dispiace, hai perso :'( PUNTI: ${end}`
    
}

//Funzione partita vinta
function winGameFunc(win) {
    const scores = document.querySelector(".scores")
    scores.innerHTML += ` Complimenti, hai vinto!!! PUNTI: ${win}`
}

/*------------------------------------------------*/

// Operazioni
let numberBomb = 48;
const start = document.querySelector(".button");
start.addEventListener("click", campoMinatoFunc);



