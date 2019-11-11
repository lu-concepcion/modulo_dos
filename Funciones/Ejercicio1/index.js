import { sumar, validarTexto } from'../funciones.js';

let primerNumero = prompt("Ingrese un número");
primerNumero = parseInt(primerNumero);
let segundoNumero = prompt("ingrese un numero");
segundoNumero = parseInt(segundoNumero);

alert(sumar(primerNumero, segundoNumero));

let textoIngresado = prompt("ingresar un texto");

alert(validarTexto(textoIngresado));