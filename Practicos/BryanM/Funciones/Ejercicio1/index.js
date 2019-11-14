import { verNumero, converTextoMayus, converTextoMinus } from '../funciones.js'

var resp = prompt("Ingrese un valor: ")
var restp = prompt("1. Ver si el valor ingresado es texto o numero \n 2. Convertir texto a minuscula \n 3. Convertir texto a mayuscula")


switch(restp){
    case "1":
        alert(verNumero(resp))
        break;
    case "2":
        alert(converTextoMinus(resp))
        break;
    case "3":
        alert(converTextoMayus(resp))
        break;
}