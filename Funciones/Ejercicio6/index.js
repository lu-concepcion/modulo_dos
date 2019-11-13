import {lotto} from '../funciones.js';

const numerosElegidos=[];
for (let i = 0; i < 6; i++) {
    numerosElegidos[i] = prompt(`Elija su numero numero ${i+1}`) 
}

alert(numerosElegidos);

alert(lotto(numerosElegidos));