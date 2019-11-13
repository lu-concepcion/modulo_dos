import {voltearArreglo} from '../funciones.js';

let pedirCantidadNumeros = prompt ("¿De cuantos numeros quieres crear tu arreglo?");
let pedirNumeros = [];

for(let i=0;i<pedirCantidadNumeros;i++){
    pedirNumeros[i] = prompt("Ingrese un numero para su arreglo");
}
let pedirOpcion = prompt("De que forma se debe ordenar \n1.- Mayor a Menor \n2.- Menor a Mayor")
alert(voltearArreglo(pedirNumeros, pedirOpcion));