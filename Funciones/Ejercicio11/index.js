import {textoEnParentisis, esTexto} from '../funciones.js';


// while(true) {
//     let cadena = prompt('Ingrese texto por favor')
//     if (esTexto(cadena)) {
//         alert('Resultado: ' + textoEnParentisis(cadena))
//         break;
//     }
//     alert('Error: solo ingresa texto');
// }

let cadena1 = 'hola (mundo) que (tal)';
let cadena2 = 'hola (aa(hola)';
let cadena3 = '()';
let cadena4 = '()(as';
let cadena5 = '()(as)(';
console.log(cadena1);
console.log(cadena2);
console.log(cadena3);
console.log(cadena4);
console.log(cadena5);
console.log('resultado-------------------------------------------------------');
console.log(textoEnParentisis(cadena1));
console.log(textoEnParentisis(cadena2));
console.log(textoEnParentisis(cadena3));
console.log(textoEnParentisis(cadena4));
console.log(textoEnParentisis(cadena5));
