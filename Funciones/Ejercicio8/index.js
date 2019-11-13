import{
    arrayFinder
}from '../Funciones.js'
const arrayDePrueba=[{
    propiedad1: "amarillo",
    id:1
},
{
    propiedad1: "rojo",
    id:2
},
{
    propiedad1:"azul",
    id:3
}]
let porpiedad=prompt("ingrese propiedad")
let valor=prompt("ingrese valor")
alert(arrayFinder(arrayDePrueba,porpiedad,valor))
