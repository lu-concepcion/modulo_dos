import{identificaPalindromo} from '../funciones.js'

let input = prompt("ingresa un texto");
if(identificaPalindromo(input)==true)
{
    alert("Esto es un palindromo");

}else{
    alert("esto no es un palindromo");
}
