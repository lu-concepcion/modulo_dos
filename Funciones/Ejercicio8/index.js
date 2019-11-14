import { buscarNumeroTexto,buscarEnArray } from '../funciones.js';


let array = ["1", "2", "3", "4", "Maximiliano", "Pedro"]
let elemento = prompt ("FUNCION 1: ingrese el numero o texto a a buscar");

console.log("funcion 1")
console.log(buscarNumeroTexto(array, elemento))

//funcion 2
let arrayPersonas = [
    {
        id: 1,
        nombre: "Maximiliano",
        edad: "26"
    },
    {
        id: 2,
        nombre: "Camila",
        edad: "25"
    },
    {
        id: 3,
        nombre: "Cecilia",
        edad: "45"
    },
    {
        id: 4,
        nombre: "Rodrigo",
        edad: "38"
    },
    {
        id: 5,
        nombre: "Pedro",
        edad: "25"
    }
]

let propiedad = prompt("FUNCION 2: ingresar propiedad a buscar");
let valor = prompt("FUNCION 2: ingresar valor de la popiedad a buscar");

console.log("funcion 2")
console.log(buscarEnArray(arrayPersonas, propiedad, valor))

let propiedadFiltrar = prompt("FUNCION 3: Ingrese la propiedad a filtrar");
let valorPropiedadFiltrar = prompt("FUNCION 3: ingrese valor de propiedad"); 

console.log("funcion 3")
console.log(buscarEnArray(arrayPersonas, propiedadFiltrar, valorPropiedadFiltrar))