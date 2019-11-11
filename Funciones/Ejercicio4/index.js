import { esTexto } from '../funciones.js';

let texto = '';

texto = prompt('Ingrese una palabra por favor');

if (esTexto(texto)) {
    alert('El texto contiene ' + cuentaVocales(texto) + ' vocales');
}

