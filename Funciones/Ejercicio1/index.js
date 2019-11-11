import { sumar, validarTexto, textoAMinuscula, textoAMayuscula } from'../funciones.js';

let primerNumero = prompt("Ingrese un número");
primerNumero = parseInt(primerNumero);
let segundoNumero = prompt("ingrese un numero");
segundoNumero = parseInt(segundoNumero);

alert(sumar(primerNumero, segundoNumero));

let textoIngresado = prompt("ingresar un texto");

alert(validarTexto(textoIngresado));

let textoMayuscula = prompt("ingresar un texto en MAYUSCULA");

alert(textoAMinuscula(textoMayuscula));

let textoMinuscula = prompt("ingresar un texto en minuscula");

alert(textoAMayuscula(textoMinuscula));