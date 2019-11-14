import { buscarEnArreglo, buscarDeterminadoElemento, filtrarArreglo } from '../funciones.js';
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
var pedirValor = prompt("¿Que valor estas buscando?");
let pedirOpcion = prompt("Donde desea buscarlo \n1.- Personas \n2.- Arreglo de objetos\n3.- Array")
if (pedirOpcion == 1) {
    alert(buscarDeterminadoElemento(pedirValor, persona))
} else {
    if (pedirOpcion == 2) {
        let pedirIndice = prompt("¿En que indice quieres buscarlo?")
        pedirIndice = pedirIndice.toLowerCase();
        if (buscarEnArreglo(personaArreglo, pedirIndice, pedirValor) !== "") {
            alert(buscarEnArreglo(personaArreglo, pedirIndice, pedirValor))
        } else {
            personaArreglo = {};
        }
    }else{
        let pedirIndice = prompt("¿En que indice quieres buscarlo?")
        pedirIndice = pedirIndice.toLowerCase();
        if (filtrarArreglo(personaArreglo, pedirIndice, pedirValor) !== "") {
            alert(filtrarArreglo(personaArreglo, pedirIndice, pedirValor))
        } else {
            personaArreglo = [];
        }
    }
}

//EJERCICIO 9