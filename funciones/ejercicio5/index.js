import {esUnTexto, esPalindromo} from '../funciones.js';
var texto = prompt("Ingresa una palabra:");
if (esUnTexto(texto)) {
    if (esPalindromo(texto)) {
        alert("Es palindromo!")
    }
    else {
        alert("Lo siento no es palindromo!")
    }
}
else {
    alert ("Uppss! Lo siento no ingresastes una palabra correcta");
}