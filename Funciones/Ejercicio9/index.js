import {voltearArreglo} from '../funciones.js';

let pedirCantidadNumeros = prompt ("¿De cuantos numeros quieres crear tu arreglo?");
let pedirNumeros = [];

for(let i=0;i<pedirCantidadNumeros;i++){
    do{
    pedirNumeros[i] = prompt("Ingrese un numero para su arreglo");
    }while(!isNaN(pedirNumeros));
}
alert (pedirNumeros)
let pedirOrden = prompt ("¿De que forma ordenarás los numeros?\n1.- Mayor a menor\n2.- Menor a mayor")
alert(voltearArreglo(pedirNumeros, pedirOrden));