import { buscarElemento, buscarEnArray, filtrarEnArray } from '../funciones.js'

//Funcion 1
let arrayNum = [1,2,3,4,5,6,7,8,9,10]
let elemt = 2

console.log("Funcion 1")
console.log("Existe elemento: " + (buscarElemento(arrayNum, elemt)?"Sí":"No"))


//Funcion 2
let arrayPersonas = [
    {
        id: 1,
        nombre: "Bryan",
        edad: 19,
        sexo: "M"
    },
    {
        id: 2,
        nombre: "Daniela",
        edad: 20,
        sexo: "F"
    },
    {
        id: 3,
        nombre: "Adrian",
        edad: 24,
        sexo: "M"
    },
    {
        id: 4,
        nombre: "Sofia",
        edad: 19,
        sexo: "F"
    }
];

console.log("Funcion 2")
console.log(buscarEnArray(arrayPersonas, "nombre", "Bryan"));

console.log("Funcion 3")
console.log(filtrarEnArray(arrayPersonas, "sexo", "M"))


