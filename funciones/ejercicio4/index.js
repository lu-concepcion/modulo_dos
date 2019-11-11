import {cuantasVocales, esUnTexto} from '../funciones.js';
var palabra = prompt("Ingresa una palabra:");
if (!esUnTexto(palabra)) {
    alert("Upps! Escribe correctamente una palabra!");
}
else {
    alert("Encontramos "+cuantasVocales(palabra)+" vocales en tu texto");
}