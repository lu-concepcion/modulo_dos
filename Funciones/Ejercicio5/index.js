import { palindromo } from '../funciones.js'

let input = prompt ("Ingrese una palabra");
while (!isNaN(input))
{
    input = prompt ("Error, ingrese una palabra");
}

alert(palindromo(input))