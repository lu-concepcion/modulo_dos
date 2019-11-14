import {validarNumero,validarLetra, convertirEnMinuscula, convertirEnMayuscula} from '../funciones.js';

let prueba = prompt("Ingrese para saber si es numero");

alert(validarNumero(prueba));

prueba = prompt("Ingrese para saber si es texto");

alert(validarLetra(prueba));


prueba = prompt("Ingrese para convertir en minuscula");

alert(convertirEnMinuscula(prueba));

prueba = prompt("Ingrese para convertir en MAYUSCULA");

alert(convertirEnMayuscula(prueba));




