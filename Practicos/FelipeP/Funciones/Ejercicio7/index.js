import { generaDigitoVerificador,convierteMinuscula} from "../funciones.js";

let rutUsuario = '';
let rut = '';
let contadorRut = 0;

rutUsuario = convierteMinuscula(prompt('Por favor, ingrese su rut'));

for (let i = 0; i < rutUsuario.length; i++) {
    if (rutUsuario.charAt(i) == '-' || rutUsuario.charAt(i) == 'k') {
        break;
    }
    if (rutUsuario.charAt(i) != '.' ) {
        rut += rutUsuario.charAt(i);
        contadorRut++;
    }
}
alert('El digito verificador es: ' + generaDigitoVerificador(rut));