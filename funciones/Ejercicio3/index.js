// Escribir un algoritmo que reciba dos números y calcule el porcentaje del segundo con respecto al primero, ej:
// Primer número: 90
// Segundo número: 40
// Resultado: 36%
// Utilizar Funciones
 
import {porcentaje} from '../funciones.js'; 
let num1 = 0
let num2 = 0
do {
     num1 = prompt("ingrese un numero: ");
} while (isNaN(num1));
do {
     num2 = prompt("ingrese un segundo numero: ");
} while (isNaN(num2))

alert(`El porcentaje del segundo numero respecto al primero es ${porcentaje(num1,num2)}`)