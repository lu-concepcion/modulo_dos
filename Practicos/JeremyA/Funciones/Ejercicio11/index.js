// Escriba un algoritmo que extraiga de un texto, todo aquello que se encuentre entre paréntesis, ej:
// Hola (mundo) que (tal) estas -> mundo tal 

import { esTexto, mostrarArray, capturaTexto } from "../funciones.js"

let frase = esTexto(prompt("ingrese un texto"))

alert(mostrarArray(capturaTexto(frase)));