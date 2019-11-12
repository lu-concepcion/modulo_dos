import { buscarEnArreglo, buscarDeterminadoElemento } from '../funciones.js';
var persona = {
    nombre: "Jorge",
    edad: 20
};

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

alert(buscarDeterminadoElemento("Jorge", persona))
alert(buscarEnArreglo(personaArreglo, "nombre", "Rodrigo"))