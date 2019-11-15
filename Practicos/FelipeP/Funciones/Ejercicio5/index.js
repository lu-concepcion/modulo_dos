import { esTexto,convierteMinuscula, esPalindromo,campoVacio, contieneEspacios } from '../funciones.js';

let texto = '';

while(true){
    texto = prompt('Ingrese una palabra por favor');
    if (campoVacio(texto) || !esTexto(texto) || !contieneEspacios(texto)) {
        alert('No ingresar espacios, números ni texto vacío');
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

