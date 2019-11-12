import { generaDigitoVerificar} from "../funciones.js";

let rutUsuario = '';

rutUsuario = prompt('Por favor, ingrese su rut');

let rut = '18292007';
alert('El digito verificador es: ' generaDigitoVerificar(rut));