import { generaNumAleatorios,verNum,buscarElemento,buscarEnArray_2 } from '../funciones.js'

let arrayNumeros = [];
let numero = 0;
let arrayAleatorio = [];
let aleatorio = 0;
let aciertos = 0;

for(let i=0; i < 6; i++){
    aleatorio = generaNumAleatorios(1,36);
    if(buscarElemento(arrayAleatorio, aleatorio)){
        i--;
        continue;
    }else {
        arrayAleatorio[i] = aleatorio;
        console.log(arrayAleatorio[i]);
    }
}

for(let i=1; i < 7; i++){
    numero = prompt("Ingrese numero para posición " + i);
    if(!verNum(numero)){
        if(buscarElemento(arrayNumeros,numero)){
            i--;
            alert("No se pueden repetir los numeros")
            continue;
        }else {
            if(buscarEnArray_2(arrayAleatorio,numero)){
                aciertos++;
            }
            arrayNumeros[i] = numero;
        }
    }else{
        alert("¡Solo se pueden ingresar numeros!");
        i--;
    }
}

alert("Numeros ganadores: " + aciertos)
