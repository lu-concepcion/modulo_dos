import { verificarNumero, verificarSeparaciones, invertirRUN, digitoVerificador } from './funciones.js';

let RUN = 0;

var pedirRUN = prompt("Ingrese su rut, sin puntos ni el numero despues del guion");

RUN = verificarSeparaciones(pedirRUN);
if (!isNaN(RUN)) {
    alert("Su rut invertido sin el numero despues del '-' es " + invertirRUN(RUN))
    alert("El digito verificador de su rut es "+digitoVerificador(RUN))
}