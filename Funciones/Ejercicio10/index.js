import {factorial, esNumero} from '../funciones.js'

let num = prompt("Ingrese un número para generar su factorial");

let check = esNumero(num);
let i = 0;

alert ("El factorial de "+ num+ " es: "+ factorial(num))