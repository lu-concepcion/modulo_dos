import { esNumero } from "../funciones.js";

let numero1 = 0;
let numero2 = 0;
let operacion = 0;

while(true) {
    numero1 = prompt ('Ingrese número 1');
    if (!esNumero(numero1)) {
        alert('Ingresa solo números');
        continue;
    }
    numero2 = prompt ('Ingrese número 2');
    if (!esNumero(numero2)) {
        alert('Ingresa solo números');
        continue;
    }
    while(true) {
        operacion = parseInt(prompt('Por favor, elija número de operación a realizar\n1. Suma\n2. Resta\n3. Division\n4. Multiplicación'));
        if (operacion >= 1 && operacion <= 4) {
            break;
        }
        alert('Error: Eliga una de las opciones anteriores');
    }
    break;
}
console.log('Very good, info: num1: ' + numero1 + ' num2: ' + numero2 + ' operación: ' + operacion);


