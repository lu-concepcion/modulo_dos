import{sumar, restar, multiplicar, dividir} from '../funciones.js'
var numero1 = prompt("Ingresa un numero");
var numero2 = prompt("Ingresa otro numero");

var operacion = prompt("Ingrese la operacion que desea ejecutar \n Sumar, Restar, Multiplicar o Dividir");
switch (operacion) {
    case "Multiplicar":
        alert(multiplicar(numero1,numero2))
        break;       
    case "Sumar":
        alert(sumar(numero1,numero2))
        break;
    case "Restar":
        alert(restar(numero1-numero2))
        break;
    case "Dividir":
        if(numero2 == 0){
            alert("Estas intentando dividir por 0")    
            break;
        }
        else alert(dividir(numero1,numero2))
        break;    

    default:
        break;
}