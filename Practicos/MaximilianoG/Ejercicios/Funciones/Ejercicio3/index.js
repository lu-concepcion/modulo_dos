import {porcentajes} from'../funciones.js';

let numero1 = prompt("Ingrese un numero");
numero1 = parseInt(numero1);
let numero2 = prompt("Ingrese el porcentaje a calcular");
numero2 = parseInt(numero2);

alert(porcentajes(numero1, numero2));