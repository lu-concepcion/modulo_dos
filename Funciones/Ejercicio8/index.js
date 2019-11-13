import{
    arrayFinder,
    objectFinder,
    objectFilter
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
},
{
    propiedad1:"rojo",
    id:4
}]
const propiedad="propiedad1"
const valor="rojo"
alert (arrayDePrueba[1].propiedad1)
let objeto = objectFilter(arrayDePrueba,propiedad,valor)
alert(objeto[0].id)
alert(objeto[1].id)
