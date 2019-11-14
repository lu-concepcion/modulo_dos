import {validarNumeros, operacionesMatematicas, calcularPorcentaje} from '../funciones.js';

let solicitarNum1 = prompt("ingrese primer numero");
solicitarNum1 = parseInt(solicitarNum1);

let solicitarNum2 = prompt("ingrese un segundo numero");
solicitarNum2 = parseInt(solicitarNum2);




     alert(calcularPorcentaje(solicitarNum2, solicitarNum1))

