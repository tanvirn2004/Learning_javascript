'use strict';

const diceRollsNumber = prompt('Enter number of dice rolls')
let i = 0
let sumOfOutputs = 0

while (i <= diceRollsNumber){
    const output = parseInt(Math.random()*6)
    sumOfOutputs = sumOfOutputs + output
    i ++
}

document.querySelector('#output7').innerHTML = sumOfOutputs.toString()
