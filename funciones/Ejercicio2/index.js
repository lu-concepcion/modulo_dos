import {sumar, restar, multiplicar, dividir} from '../funciones.js'

let firstValor = "";
let secondValor = "";
let rep = false;

do{
    const resp = prompt("Ingrese opcion : \n  1.Sumar \n  2.Restar \n  3.Multiplicar \n  4.Dividir")
    switch(resp){
        case "1":
            do {
                firstValor = prompt("Ingrese primer valor: ");
                
            }while(isNaN(parseInt(firstValor)));
            do{
                secondValor = prompt("Ingrese segundo valor: ");
            }while(isNaN(parseInt(secondValor)))
            alert(sumar(firstValor, secondValor))
            break;
        case "2":
            do {
                firstValor = prompt("Ingrese primer valor: ");
                
            }while(isNaN(parseInt(firstValor)));
            do{
                secondValor = prompt("Ingrese segundo valor: ");
            }while(isNaN(parseInt(secondValor)))
            alert(restar(firstValor, secondValor))
            break;
        case "3":
            do {
                firstValor = prompt("Ingrese primer valor: ");
                
            }while(isNaN(parseInt(firstValor)));
            do{
                secondValor = prompt("Ingrese segundo valor: ");
            }while(isNaN(parseInt(secondValor)))
            alert(multiplicar(firstValor, secondValor))
            break;
        case "4":
            do {
                firstValor = prompt("Ingrese primer valor: ");
                
            }while(isNaN(parseInt(firstValor)));
            do{
                secondValor = prompt("Ingrese segundo valor: ");
                if(secondValor == 0){
                    alert("El segundo valor no puede ser 0");
                }
            }while(isNaN(parseInt(secondValor)) || secondValor == 0)
            alert(dividir(firstValor, secondValor))
            break;
        default:
            alert("Ingrese opcion valida");
            rep = true;
    }

}while(rep)