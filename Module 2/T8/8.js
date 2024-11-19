'use strict';

let stringArray = ['Rocky','Don','Tiger','Wingman'];
let space = "";

function concat (arrayX){
    for (let i = 0; i < arrayX.length; i++){
        space += arrayX[i]
        document.querySelector('#output8').innerHTML = space;
    }
}

concat(stringArray)