import{encontrarElementoArray,buscarEnArray, arrayFiltrado} from '../funciones.js'

/*var arreglito = []

for (let i = 0; i < 6; i++) {
    arreglito[i] = prompt("ingrese algo");
    
}
var busqueda = prompt ("que desea buscar")

alert( encontrarElementoArray(busqueda,arreglito))*/



let arrayPersonas = [
    {
    id: 1 ,
    nombre: "Pedro",
    edad: "14", 
    },
    {
    id: 2,
    nombre: "Pedro",
    edad: "45", 
    },
    {
    id: 3,
    nombre: "Diego",
    edad: "14", 
    },
    {
    id: 4,
    nombre: "Juana",
    edad: "38", 
    },
    {
    id: 5,
    nombre: "Lewis",
    edad: "68", 
    }
]

var queBusco = prompt("¿Que desea buscar? ¿nombre o edad?");
var valorBuscado = prompt("Agrega el criterio de busqueda");

//console.log(buscarEnArray(arrayPersonas, queBusco, valorBuscado))
console.log(arrayFiltrado(arrayPersonas, queBusco, valorBuscado))