import {sumar, restar, multiplicar, dividir, convertirEnMinuscula} from '../funciones.js'; 



let respuesta = "";
let repetir = true;
let numero1 = prompt("ingrese primer numero")
let numero2 = prompt("ingrese segundo numero")

do {
    respuesta = convertirEnMinuscula(prompt("Seleccione: \nSumar \nRestar \nMultiplicar \nDividir"));

    if (respuesta == "sumar") {
        alert(sumar(numero1,numero2));
        break;
    }
    if (respuesta == "restar") {
       alert(restar(numero1,numero2));
        break;
    }
    if (respuesta == "multiplicar") {
        alert(multiplicar(numero1,numero2));
        break;
    }
    if (respuesta == "dividir") {
        alert(dividir(numero1,numero2));
        break;
    }

} while (repetir);