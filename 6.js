'use strict';

const answer = confirm('Do you want to find the square root?');

if (answer === true){
    const num = parseInt(prompt('Enter the number: '))
    document.querySelector('#output6').innerHTML = `The square roots is ` + Math.sqrt(num);
}

else if (answer === false) {
       document.querySelector('#output6').innerHTML = `Request cancelled`;
}
