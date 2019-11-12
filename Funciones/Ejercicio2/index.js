// Escribir un algoritmo que reciba dos números. Y te ofrezca realizar las siguientes operaciones aritméticas:
// Sumar
// Multiplicar
// Dividir (ojo con la división por cero)
// Restar

import {sumar, restar, multiplicar, dividir, esNumero, esTexto, convertirMayuscula} from "../funciones.js"

let num1= 0;
let num2= 0;
let respuesta="";

do{
    num1 = parseInt(prompt("ingrese el primer número"));
    if(!esNumero(num1)){
        alert("ingrese un número válido");
    }
}while(!esNumero(num1))

