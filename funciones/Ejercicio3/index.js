// Escribir un algoritmo que reciba dos números y calcule el porcentaje del segundo con respecto al primero, ej:
// Primer número: 90
// Segundo número: 40
// Resultado: 36%
// Utilizar Funciones
 
import {porcentaje} from '../funciones.js'; 
let num1 = prompt("ingrese un numero: ");
let num2 = prompt("ingrese un segundo numero: ");
alert(`El porcentaje del segundo numero respecto al primero es ${porcentaje(num1,num2)}`)