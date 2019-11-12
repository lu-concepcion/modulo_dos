import { verificarNumero, verificarSeparaciones } from './funciones.js';

var pedirRUN = prompt("Ingrese su rut, sin puntos ni el numero despues del guion");

alert(verificarSeparaciones(pedirRUN));
