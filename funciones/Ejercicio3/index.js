import {sacarPorcentaje, verNum} from '../funciones.js'

let num1 = "";
let num2 = "";

do{
    num1 = prompt("Ingrese valor");
}while(verNum(num1))

do{
    do{
        num2 = prompt("Ingrese porcentaje");
        if(num2 <= 0 || num2 >= 100){
            alert("Ingrese un numero entre 1 y 99")
        }
    }while(num2 <= 0 || num2 >= 100);
}while(verNum(num2))

alert("El porcentaje del segundo valor con respecto al primero es: " + sacarPorcentaje(num1, num2) + "%")
