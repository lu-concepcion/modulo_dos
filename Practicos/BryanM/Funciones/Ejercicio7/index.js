import {codigoVerificador} from '../funciones.js'

const rut = prompt("Ingrese rut");

alert("El código verificador es: " + codigoVerificador(rut));