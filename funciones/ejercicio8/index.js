import { buscarElemento } from '../funciones.js';
var texto = prompt("Ingresa una busqueda:");
if (buscarElemento(texto))
alert("Si se encuentra tu busqueda!");
else
alert("No se encuentra tu busqueda");
