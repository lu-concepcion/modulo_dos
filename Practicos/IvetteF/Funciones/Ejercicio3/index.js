import { porcentaje } from '../funciones.js'

let input = [];

input[0] = prompt("Ingrese un número");
input[1] = prompt("Ingrese el porcentaje que desea obtener");

alert("El "+input[1]+"% de "+ input [0] +" es: " + porcentaje( input[0],input[1]))