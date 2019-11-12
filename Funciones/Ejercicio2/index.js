import {sumar, restar, multiplicar, dividir} from '../funciones.js'; 



let respuesta = "";
let repetir = true;

let numero1 = prompt("ingrese primer numero")
let numero2 = prompt("ingrese segundo numero")

do {
    respuesta = prompt("Seleccione: \nSumar \nRestar \nMultiplicar \nDividir");
    

} while (repetir);