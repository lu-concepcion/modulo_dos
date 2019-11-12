// Escribir un algoritmo que reciba dos números y calcule el porcentaje del segundo con respecto al primero, ej:
// Primer número: 90
// Segundo número: 40
// Resultado: 36%
import {esNumero, regla3} from "../funciones.js"

let num1=0;
let num2=0;

do{
    num1=esNumero(prompt("Ingrese el primer número"));
}while(!parseInt(num1));

do{
    num2 = esNumero(prompt("ingrese el segundo número"));
}while(!parseInt(num2))

alert(regla3(num1,num2))