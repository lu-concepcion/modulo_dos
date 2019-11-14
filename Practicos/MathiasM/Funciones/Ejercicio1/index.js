import {validaLetra, validaNumero,convertirMinuscula, convertirMayuscula } from '../funciones.js';

let palabra = prompt("ingrese palabra o numero");
alert(validaLetra(palabra));
alert(convertirMinuscula(palabra));
alert(convertirMayuscula(palabra));
//validaNumero(palabra);