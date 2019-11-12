import { generaDigitoVerificador} from "../funciones.js";

let rutUsuario = '';

// rutUsuario = prompt('Por favor, ingrese su rut');

let rut = '17590890';
alert('El digito verificador es: ' + generaDigitoVerificador(rut));