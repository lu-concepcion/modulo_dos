// Escribir los siguientes algoritmos en forma de funciones.

// - Función que permite encontrar determinado elemento (solo: número/texto) dentro un array
// - Función que permita encontrar en un array un determinado objeto, dada una condicion, ej:
// 	buscarEnArray(arrayDondeBuscara, propiedadAFiltrar, valorPropiedad)
// 	Tips: 
// 	Una propiedad de objeto también se puede obtener de esta manera:
// 	const objeto = { id: 1, value: 2 }
// 	console.log(objeto["id"])
// 	Buscar documentación: Object.keys()
// 	Debe retornar un Objeto vacío en caso de no encontrar nada

// - Función que permita filtrar un array de elementos, dada una condición
// 	filtrarArray(arrayDondeFiltrara, propiedadAFiltrar, valorPropiedad)
// 	Debe retornar un array vacío en caso de no encontrar nada
import {encontrar,buscar} from '../funciones.js';
//let array1 = [5, 12, 8, 130, 44];
//let elemento = prompt("ingrese dato que desea buscar en el arreglo: ")
//alert (encontrar(array1,elemento))

let persona1 = { nombre: 'ana', apellido: 'saez', edad: '18' };
let persona2 = { nombre: 'ana', apellido: 'popo', edad: '24'};
let persona3 = { nombre: 'javier', apellido: 'gonzalez', edad: '32'};
let arregle = [persona1, persona2, persona3]
let prop = prompt("ingrese propiedad que desea buscar: ")
let value = prompt("ingrese atributo que desea buscar: ")
console.log(buscar(arregle,prop,value))
 


