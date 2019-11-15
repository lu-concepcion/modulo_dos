import {verNum} from '../funciones.js'

let numeros = [];
let num = 0;
let respSec = 0;
do{
    respSec = prompt("Ingrese cantidada de numeros que desea ingresar");
    if(verNum(respSec)){
        alert("Solo se pueden ingresar numeros");
        continue;
    }
}while(!verNum(respSec))
console.log(respSec)
for(let i=0; i < respSec.length; i++ ){
    num = prompt("Ingrese numero para la posición " + i)
    if(!verNum(num)){
        numeros[i] = num;
    }else{
        alert("Solo se pueden ingresar numeros");
        i--;
    }
}