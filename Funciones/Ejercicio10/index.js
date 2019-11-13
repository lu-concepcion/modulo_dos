import {esNumero,generaFactorial} from '../funciones.js';

while(true) {
    let numero = prompt('Ingrese un número');
    if (esNumero(numero)) {
        break
    }
    alert('Error: Solo puedes ingresar números');
}

alert('El factorial de ' + numero + ' es: ' + generaFactorial(numero))
