import {sumar, restar, multiplicar, dividir} from '../funciones.js'

let firstValor = "";
let secondValor = "";
let rep = false;

do{
    firstValor = prompt("Ingrese primer valor");
}while(isNaN(parseInt(firstValor)))

do{
    secondValor = prompt("Ingrese segundo valor");
}while(isNaN(parseInt(secondValor)))

do{
    const resp = prompt("Ingrese opcion : \n 1.Sumar \n 2.Restar \n 3.Multiplicar \n 4.Dividir")
    switch(resp){
        case "1":
            alert("El resultado es: " + sumar(firstValor, secondValor))
            break;
        case "2":
            alert("El resultado es: " + restar(firstValor, secondValor))
            break;
        case "3":
            alert("El resultado es: " + multiplicar(firstValor, secondValor))
            break;
        case "4":
            alert("El resultado es: " + dividir(firstValor, secondValor))
            break;
        default:
            alert("Ingrese opcion valida");
            rep = true;
    }

}while(rep)