import {factorial } from '../funciones.js';

do{
var pedirNumero = prompt("¿Que numero desea sacar el factorial?");
}while(isNaN(pedirNumero))

alert(factorial(pedirNumero))