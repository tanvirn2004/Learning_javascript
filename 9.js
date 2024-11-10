'use strict';

const number = parseInt(prompt("Enter number"));

if (number >= 1){
    for (let i=2; i < number; i++){
        if (number % i === 0) {
            document.querySelector('#output9').innerHTML = `${number} is not a prime number.`;
        }
        else{
            document.querySelector('#output9').innerHTML = `${number} is a prime number.`;
        }

    }
}
else if (num === 1){
    document.querySelector('#output9').innerHTML = `${number} not a prime number nor composite.`;
}
else{
    document.querySelector('#output9').innerHTML = `Enter valid number`;
}
