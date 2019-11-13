// Escriba un algoritmo que extraiga de un texto, todo aquello que se encuentre entre paréntesis, ej:
// Hola (mundo) que (tal) estas -> mundo tal 
import { extraerDeParentesis } from '../funciones.js'
let texto = prompt("Ingrese texto")
alert(extraerDeParentesis(texto))