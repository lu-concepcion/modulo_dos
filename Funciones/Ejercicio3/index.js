import { sacarPorcentaje, verificarNumero } from './funciones.js';

var pedirNumero = prompt("Ingrese un valor al que sacarle porcentaje");
if (!verificarNumero(pedirNumero)) {
    var pedirPorcentaje = prompt("Ingrese el porcentaje");
    if (!verificarNumero(pedirPorcentaje)) {
        alert(sacarPorcentaje(pedirNumero, pedirPorcentaje))
    } else {
        alert("El valor ingresado no es un numero")
    }
} else {
    alert("El valor ingresado no es un numero")
}

