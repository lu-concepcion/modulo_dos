// Escriba un algoritmo que extraiga de un texto, todo aquello que se encuentre entre paréntesis, ej:
// Hola (mundo) que (tal) estas -> mundo tal 

import{ extraerTextoParentesis } from '../funciones.js';

let texto = prompt("Ingrese texto con parentesis");
alert(extraerTextoParentesis(texto));