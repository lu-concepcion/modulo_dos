import {extraer} from '../funciones.js'
let input = prompt("Ingrese una frase");
let caracter = [];
let i = 0;
let aux = "";
// while(aux != "salir")
// {
//     aux = prompt("Ingrese el caracter "+i+ " para extraer el texto asociado a este o salir para finalizar");
//     if(aux !="salir")
//     {
//         caracter[i] = aux
//         i++;
//     }
// } 


alert(extraer(input))