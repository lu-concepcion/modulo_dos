
import {suma, resta, division, multiplicacion} from '../../funciones.js';

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
      alert (suma(n1, n2))
      break;
    case "2":
      //Caso de restar
      alert (resta(n1, n2))
      break;
    case "3":
      //Caso de division
      if(n1 == 0 && n2 == 0){

        alert ("No puede dividirse entre 0")
        break;
      }else{
      
      alert (division(n1, n2))
      break;
      }

    case "4":
      //Caso de multiplicacion
      alert (multiplicacion(n1, n2))
      break;
    default:
      //Caso fuera de rango
      alert ("Se desconoce la opcion elegida")
      break;
  }

    




