import {textoEnParentisis, esTexto} from '../funciones.js';


while(true) {
    let cadena = prompt('Ingrese texto por favor')
    if (esTexto(cadena)) {
        alert('Resultado: ' + textoEnParentisis(cadena))
    }
    alert('Error: solo ingresa texto');
}