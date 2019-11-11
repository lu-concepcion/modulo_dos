import { esPalindromo,converTextoMinus } from '../funciones.js'

let resp = "";

while(true){
    resp = prompt("Ingrese un texto: ");
    if(esPalindromo(converTextoMinus(resp))){
        alert("La palabra es un palídromo");
        break;
    }
    else{
        alert("La palabra no es un palíndromo");
        break;
    }
    alert("Ingrese solo texto");
}