'use strict';

const Gryffindor = 1;
const Slytherin = 2;
const Hufflepuff = 3;
const Ravenclaw = 4;

const name = prompt("Enter your name:");

let num = Math.floor(Math.random() * 5);

switch (num) {
    case Gryffindor:
        document.querySelector('#sentence').innerHTML = `Hello ${name}, you are in Gryffindor.`
        break;
    case Slytherin:
        document.querySelector('#sentence').innerHTML = `Hello ${name}, you are in Slytherin.`
        break;
    case Hufflepuff:
        document.querySelector('#sentence').innerHTML = `Hello ${name}, you are in Hufflepuff.`
        break;
    case Ravenclaw:
        document.querySelector('#sentence').innerHTML = `Hello ${name}, you are in Ravenclaw.`
}
