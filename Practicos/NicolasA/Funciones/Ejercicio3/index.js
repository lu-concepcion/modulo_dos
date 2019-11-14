import{
    esNumero,
    porcentajeDelPrimero
} from '../funciones.js';

let numA = 0;
let numB = 0;
do{
    numA = parseInt(prompt("Ingrese el primer número"));
    if(!esNumero(numA)){
        alert("No es número!");
    }
}while(!esNumero(numA));

do{
    numB = parseInt(prompt("Ingrese el segundo número"));
    if(!esNumero(numB)){
        alert("No es número!");
    }
}while(!esNumero(numB));

alert("El porcentaje del segundo número con respecto al primero es: " + porcentajeDelPrimero(numA, numB) + "%")
