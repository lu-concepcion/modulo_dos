  
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

import {esNumero, esTexto, buscaElemento, buscarEnArray, } from "../funciones.js"

const numeroLetra = [1,2,3,4,5,6,7,8,9,0,"a","b","c","d","e","f","g","h","i","j","k","l","m","n","ñ","o","p","q","r","s","t","u","v","w","x","y","z"];

// let elementoBuscado= prompt("ingresa una letra o número");
// buscaElemento(elementoBuscado, numeroLetra)


const arrayElemento = [{nombre:"jeremy", value:"el mejor"},{nombre:"elguasonbb", value:"jocker"}];
let propiedad = prompt("ingresa una propiedad");
let elemento = prompt("ingresa el elemento a buscar")

buscarEnArray(arrayElemento, propiedad, elemento)