import { esNumero, esTexto, minuscula, mayuscula} from '../funciones.js'

let input = prompt("Ingrese texto o números, y solo texto para convertir a minúscula/mayúscula");

let opcion = prompt("Ingrese una opción:\n 0 : Comprueba si es número\n 1 : Comprueba si es Texto\n 2 : Convierte el texto a minúscula\n 3 : Convierte el texto a mayuscula");

switch (opcion)
{
    case "0":
            alert(esNumero(input))
            break;
    case "1":
            alert(esTexto(input))
            break;
    case "2": 
            alert(minuscula(input))
            break;
    case "3":
            alert(mayuscula(input))
            break;
}
