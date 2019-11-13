import { esNumero } from "../funciones.js"

let numeros = [];
let contador = 0;

contador = esNumero(prompt("ingrese cuantos numeros desea ingresar"))

for(let i=0; i<contador; i++){
    numeros.push(esNumero(prompt("ingresa el número")));
}


//alert(numeros);