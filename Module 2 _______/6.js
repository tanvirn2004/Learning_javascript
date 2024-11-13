'use strict';

function diceRolls() {
    let numOutput = Math.floor(Math.random()*7)

    while (numOutput < 6) {

        numOutput = Math.floor(Math.random()*7)


        document.querySelector('#output6').innerHTML += `<li>${numOutput}</li>`;
    }
}

diceRolls()