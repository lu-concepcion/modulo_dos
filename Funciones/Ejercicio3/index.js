import {calcularPorcentaje} from '../funciones.js';

let aux;
let numero1;
let numero2;


   
do {
    numero1 = prompt("ingrese porcentaje que desea calcular");
} while (isNaN(parseInt(numero1)));

do {
    numero2 = prompt("ingrese numero que desee calcular el porcentaje");
} while (isNaN(parseInt(numero1)));

alert(`${calcularPorcentaje(numero1,numero2)}%`);
  


