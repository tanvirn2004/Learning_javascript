'use strict';

function diceRolls(sides) {
    let numOutput = Math.floor(Math.random()* (sides+1));
    while (numOutput < sides) {
        numOutput = Math.floor(Math.random()* (sides+1));
        document.querySelector('#output7').innerHTML += `<li>${numOutput}</li>`;
    }
}

diceRolls(21)