import { esUnNumero, porcentaje } from '../funciones.js';

do {
    var paso = false;
    var num1 = prompt ("Ingresa un primer número:");
    if (num1 == "" || !esUnNumero(num1))
        alert ("No ingresastes el primer número correcto!")
    else
    var paso = true;
}while(!paso);

do {
    var paso = false;
    var num2 = prompt ("Ingresa el segundo número:");
    if (num2 == "" || !esUnNumero(num2))
        alert ("No ingresastes el segundo número correcto!")
    else
    var paso = true;
}while(!paso);

alert ("Tu resultado es: " + porcentaje(num1,num2));