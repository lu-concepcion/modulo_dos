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
import{ buscarElemento, filtrarArray } from '../funciones.js'
const array =[1,2,3,4,5,"a","b","c","d","e"]
const array2 =[{id:1,edad:12},{id:2,edad:22},{id:3,edad:32},{id:4,edad:12}]
let valorBusqueda = prompt("Ingrese un elemento a buscar")
alert("Valor buscado = "+buscarElemento(array,valorBusqueda))
let propiedadBusqueda = prompt("Ingrese una propiedad a buscar")
let datoBusqueda = prompt("Ingrese un dato a buscar")
alert("Objeto buscado = "+filtrarArray(array2,propiedadBusqueda,datoBusqueda))
