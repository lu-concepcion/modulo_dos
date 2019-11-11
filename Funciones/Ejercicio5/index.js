import { esTexto,convierteMinuscula, esPalindromo } from '../funciones.js';

let texto = '';

while(true){
    texto = prompt('Ingrese una palabra por favor');
    if (esPalindromo(convierteMinuscula(texto))) {
        alert('La palabra es un palíndromo');
        break;
    } else {
        alert('La palabra no es un palíndromo');
        break;
    }
    alert('Ingresa solo texto');
}

