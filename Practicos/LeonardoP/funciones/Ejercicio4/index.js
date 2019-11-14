import{cuentaVovales} from '../funciones.js'

let input = prompt("ingresa un texto");
let numeroVocales=cuentaVovales(input);
alert("El texto contiene: "+numeroVocales+" vocales");
