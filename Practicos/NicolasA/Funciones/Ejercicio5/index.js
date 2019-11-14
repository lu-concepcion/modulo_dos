import{
    esPalindromo
} from '../funciones.js';

let input = prompt("Ingrese una palabra para ver si es palindromo");

if(esPalindromo(input)){
    alert("Lo es");
}else{
    alert("No es");
}