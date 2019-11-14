import{validaTexto,contarVocales,esPalindromo} from '../funciones.js'

let ingreso = prompt("Ingresar texto");
if(esPalindromo(ingreso) == true)alert("Es palindromo")
else alert("no es palindromo")