
import {sumar, restar, dividir, multiplicar} from '../funciones.js';

const n1 = prompt ("ingrese un numero")
const n2 = prompt ("ingrese otro numero")


let eleccion = prompt ("Seleccione una accion: \
Sumar (1) \
, Restar (2) \
, Dividir (3) \
, Multiplicar (4)")

switch (eleccion) {
    case "1":
      //Caso de suma
      alert (sumar(n1, n2))
      break;
    case "2":
      //Caso de restar
      alert (restar(n1, n2))
      break;
    case "3":
      //Caso de division
      alert (dividir(n1, n2))
      break;
    case "4":
      //Caso de multiplicacion
      alert (multiplicar(n1, n2))
      break;
    default:
      //Caso fuera de rango
      alert ("Se desconoce la opcion elegida")
      break;
  }

    




