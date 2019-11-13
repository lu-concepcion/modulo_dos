import { generaNumAleatorios,verNum,buscarElemento } from '../funciones.js'

let arrayNumeros = [];
let numero = "";
let arrayAleatorio = [];
let aleatorio = "";
let numGanadores;

for(let i=1; i < 7; i++){
    numero = prompt("Ingrese numero para posición " + i);
    if(verNum(numero) == false){
        if(buscarElemento(arrayNumeros,numero)){
            i--;
            alert("No se pueden repetir los numeros")
            continue;
        }else {
            arrayNumeros[i] = numero;
        }
    }else{
        alert("¡Solo se pueden ingresar numeros!");
        i--;
    }
}

for(let i=0; i < 6; i++){
    aleatorio = generaNumAleatorios(1,36);
    if(buscarElemento(arrayAleatorio, aleatorio)){
        i--;
        continue;
    }else {
        arrayAleatorio[i] = aleatorio;
        console.log(aleatorio);
    }
}
