import {esNumero,generaFactorial} from '../funciones.js';
let numero = 0;

while(true) {
    numero = prompt('Ingrese un número');
    if (esNumero(numero)) {
        break
    }
    alert('Error: Solo puedes ingresar números');
}

alert('El factorial de ' + numero + ' es: ' + generaFactorial(numero))
