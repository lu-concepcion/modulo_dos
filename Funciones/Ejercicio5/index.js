import { esTexto,convierteMinuscula, esPalindromo,campoVacio } from '../funciones.js';

let texto = '';

while(true){
    texto = prompt('Ingrese una palabra por favor');
    if (campoVacio(texto) || !esTexto(texto)) {
        alert('No ingreses campo vacío ni números');
        continue;
    }
    if (esPalindromo(convierteMinuscula(texto))) {
        alert('La palabra es un palíndromo');
        break;
    } else {
        alert('La palabra no es un palíndromo');
        break;
    }
}

