import { buscarEnArreglo, buscarDeterminadoElemento } from '../funciones.js';
var persona = ["Jorge", "Eduardo", "Rodrigo"];

var personaArreglo = [
    {
        nombre: "Jorge",
        edad: 20
    },
    {
        nombre: "Juan",
        edad: 32
    },
    {
        nombre: "Rodrigo",
        edad: 52
    },
];

var pedirValor= prompt("¿Que valor estas buscando?");
let pedirIndice = prompt("¿En que indice quieres buscarlo?")

console.log(pedirValor, pedirIndice)
alert(buscarDeterminadoElemento(pedirValor, persona))
alert(buscarEnArreglo(personaArreglo, pedirIndice, pedirValor))