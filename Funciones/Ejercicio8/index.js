import{
    encontrarElementoEnArray,

}from '../funciones.js';

//1.- Funcion para encontrar determinado elemento funcion(array, elemento)
//2.- Funcion para buscar un objeto dentro de un array
// propiedadAFiltrar (nombre: valor) valorPropiedad
//3.- Filtrar un array dada una condición

//----------------------------1-----------------------------
// let arrayNumeros = [1,2,3,4,5,6,7,8,9,0];
// let elemento = prompt("Escriba el elemento a buscar");

// if(encontrarElementoEnArray(arrayNumeros, elemento)){
//     alert("Encontrado");
// }else{
//     alert("No encontrado");
// }
//----------------------------1-----------------------------

var listaObjetos = [
    {
      id: 1,
      valor: "uno"
    },
    {
      id: 2,
      valor: "dos"
    }
];

let encontrado = typeof listaObjetos[0] == 'object';

console.log(encontrado)