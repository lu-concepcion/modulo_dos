import {validarTexto, sumar, restar, convertirMayuscula, convertirMinuscula} from '../funciones.js';

let firstNumber = prompt("ingrese un valor")
firstNumber = parseInt(firstNumber)

let secondNumber = prompt("ingrese un valor")
secondNumber = parseInt(secondNumber)

alert(sumar(firstNumber,secondNumber))

let ingresarTexto = prompt("ingrese un texto")


alert(validarTexto(ingresarTexto))


let minuscula = prompt("Ingrese un texto en mayuscula")
alert(convertirMinuscula(minuscula))

let mayuscula = prompt("ingrese texto en mayuscula")
alert (convertirMayuscula(mayuscula))



