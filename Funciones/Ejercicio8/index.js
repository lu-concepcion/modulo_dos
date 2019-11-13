import{
    arrayFinder,
    objectFinder
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
const propiedad="propiedad1"
const valor="amarillo"
alert(objectFinder(arrayDePrueba,propiedad,valor))
