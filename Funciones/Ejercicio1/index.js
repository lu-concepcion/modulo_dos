import { esNumero, esTexto,convierteMayuscula,convierteMinuscula } from '../funciones.js';

let texto = prompt('Ingrese texto');

if (esNumero(texto)) {
    alert('El texto ingresado es número');
} else {
    alert('El texto ingresado no es número')
}

// if (esTexto(texto)) {
//     alert('El texto ingresado es texto');
// } else {
//     alert('El texto ingresado no es texto')
// }

// alert('Texto en minúscula: ' + convierteMinuscula(texto));
// alert('Texto en mayúscula: ' + convierteMayuscula(texto));



