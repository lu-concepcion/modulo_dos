// Escribir un algoritmo que calcule el digito verificador de un RUN, para eso se debe implementar el algoritmo del módulo 11.
// El algoritmo debe recibir run sin puntos guión ni digito verificador (Ojo, el algoritmo, el usuario puede ingresar su rut en cualquier formato y el código debe realizar la validación necesaria), ej: 17.590.890-0    -> 17590890
// Debe invertir el run, ej: 17590890 -> 09809571
// Debe multiplicar cada número por la siguiente serie, 2, 3, 4, 5, 6, 7, si la serie termina, debe volver al inicio, al finalizar debe guardar la suma de todas las multiplicaciones ej:
// A) 0 * 2 + 9 * 3 + 8 * 4 + 0 * 5 + 9 * 6 + 5 * 7 + 7 * 2 + 1 * 3 = 165
// B) 165 % 11 = 0
// C) 11 – 0 = 0
// D) La resta será el resultado del digito verificador, los casos especiales serán estos:
// 11 -> 0
// 10 -> K

// Tips:
// String.split(), separa texto en arrays, dada una condición, ej:

// let texto = "Hola;Hernan"
// console.log(texto.split(";"))
// // ["Hola","Hernan"]
import{ inversa } from '../funciones.js';
let run = "";

run = prompt("Ingrese su run");
inversa(run)


