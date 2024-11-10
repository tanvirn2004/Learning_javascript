'use strict';

let start_year = parseInt(prompt("Enter start year. "));
const end_year = parseInt(prompt("Enter end year. "));

while(start_year <= end_year){
    if (start_year % 100 === 0){
        if(start_year % 400 === 0 && start_year % 4 === 0){
            document.querySelector('#output8').innerHTML += `<li> ${start_year} Is a leap year.</li>`;
            start_year++
        }
    }

    else if (start_year % 4 === 0){
        document.querySelector('#output8').innerHTML += `<li> ${start_year} Is a leap year.</li>`;
        start_year++
    }
    else{
        start_year++
    }
}
