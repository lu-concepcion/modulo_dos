import { esTexto,cuentaVocales,convierteMinuscula } from '../funciones.js';

let texto = '';

while(true){
    texto = prompt('Ingrese una palabra por favor');
    if (esTexto(texto)) {
        alert('El texto contiene ' + cuentaVocales(convierteMinuscula(texto)) + ' vocales');
        break;
    }
    alert('Ingresa solo texto');
}

