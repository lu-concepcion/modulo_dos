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

import{ encontrarElemento, encontrarEnArray, filtrarEnArray } from '../funciones.js';
let propiedad= prompt("Ingrese que desea buscar");
let elemento= prompt("Ingrese valor a buscar");
const array=[1,2,3,4,5,6,"mathias","jeremy","jorge"];
const arrayObjetos=[{nombre:"mathias",edad:22},{nombre:"jeremy",edad:45},{nombre:"mathias",edad:34}]
//alert(encontrarEnArray(arrayObjetos,propiedad,elemento));
alert(filtrarEnArray(arrayObjetos,propiedad,elemento));