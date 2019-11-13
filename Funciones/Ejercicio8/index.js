import {busqueda, buscarObj} from '../funciones.js'
//~~~~~~~~~~~~~~~~~~~~~~~~~~~8a~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
// let input = [];
// let i = 0;
// let aux = "";
// while(aux != "salir")
// {
//     aux = prompt("Ingrese el elemento "+i+" de su arreglo o salir para finalizar");
//     if(aux !="salir")
//     {
//         input [i] = aux
//         i++;
//     }
// } 

// let buscar = prompt("Ingrese el elemento a buscar"); 

// let check = busqueda(input,buscar);
// if(check ==0)
// {
//     alert("El elemento se encuentra dentro de los carácteres ingresados")
// }

// if (check == 1)
// {
//     alert("El elemento no se encuentra dentro de los carácteres ingresados")
// }

//~~~~~~~~~~~~~~~~~~~~~~~~~~~8b~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

let propiedad = prompt("Ingrese una propiedad");
let valor = prompt("Ingrese un valor");
let objetos = 
[
    {propiedad1:"valor1", propiedad2:"valor2", propiedad3: "valor3"},
    {propiedad11:"valor11", propiedad22:"valor22", propiedad33: "valor33"},
    {propiedad111:"valor111", propiedad222:"valor222", propiedad333: "valor333"},
];

let objeto = buscarObj(objetos, propiedad, valor)
console.log(objeto)