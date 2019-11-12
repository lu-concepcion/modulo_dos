import { esNumero, esTexto, minuscula, mayuscula} from '../funciones.js'

let input = prompt("Ingrese texto o números, y solo texto para convertir a minúscula/mayúscula");

let opcion = prompt("Ingrese una opción:\n 0 : Comprueba si es número\n 1 : Comprueba si es Texto\n 2 : Convierte el texto a minúscula\n 3 : Convierte el texto a mayuscula");

let output =0;
switch (opcion)
{
    case "0":
            output = esNumero(input)
            if (output == 0)
            {
                alert("El/ Los carácteres ingresados corresponden a un número")
            }
            else
            {
                alert("El/ Los carácteres ingresados no corresponden a un número")
            }
        break;
    case "1":
         output = esTexto(input)
            if (output == 0)
            {
                alert("El/ Los carácteres ingresados corresponden a Texto")
            }
            else
            {
                alert("El/ Los carácteres ingresados no corresponden a Texto")
            }
            break;
    case "2": 
            alert(minuscula(input))
            break;
    case "3":
            alert(mayuscula(input))
            break;
}
