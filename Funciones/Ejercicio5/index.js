import { verificar_palindrome, voltear_palabra } from './funciones.js';

let preguntar_texto = prompt("Ingrese un texto");
alert(voltear_palabra(preguntar_texto))

if(isNaN(preguntar_texto)){
    if(verificar_palindrome(preguntar_texto)){
        alert("Son palindromes")
    }else{
        alert("No son palindromes")
    }
}else{
    alert("Lo ingresado no es un texto")
}