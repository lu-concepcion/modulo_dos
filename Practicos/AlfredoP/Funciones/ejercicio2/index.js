import {esUnNumero, sumar, restar, multiplicar, dividir} from '../funciones.js';

var paso = false;
do {
    var paso = false;
    var num1 = prompt("Ingresa un número:");
    var num2 = prompt("Ingresa otro número:");
    if (num1 == "" || esUnNumero(num1) == false || num2 == "" || esUnNumero(num2) == false) {
        if(esUnNumero(num1) == false || num1 == "")
        var num1 = prompt("Ingresa un número:");
        else if (esUnNumero(num2) == false || num2 == "")
        var num2 = prompt("Ingresa otro número:");
    }
    else {
        var paso = true;
    }
}while(!paso);

var unaOpcion = prompt("Introduce la operacion que deseas realizar: \n1- Sumar \n2- Restar \n3-Multiplicar \n4- Dividir");
if (esUnNumero(unaOpcion)) {
    if (unaOpcion == 1)
    alert("Tu resultado es: " + sumar(num1,num2));
    else if (unaOpcion == 2)
    alert("Tu resultado es: " + restar(num1,num2));
    else if (unaOpcion == 3)
    alert ("Tu resultado es: " + multiplicar(num1,num2));
    else if (unaOpcion == 4 && num1 !== 0 && num2 !== 0)
    alert("Tu resultado es: " + dividir(num1,num2));
    else
    alert("Upss! Seleccionastes una opción no disponible o intentas dividir con algún valor en 0");
}