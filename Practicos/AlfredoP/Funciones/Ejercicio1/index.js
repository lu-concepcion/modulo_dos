import {esUnNumero, esUnTexto, textoEnMinuscula, textoEnMayuscula} from '../funciones.js';
var ingresaUnCaracter = prompt("Escribe algo:");
if (esUnTexto(ingresaUnCaracter)) {
    alert ("Es un texto");
}
