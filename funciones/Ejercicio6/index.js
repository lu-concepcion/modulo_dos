import { generaNumAleatorios,seRepite,verNum } from '../funciones.js'

let arrayNumeros = [];
let numero = "";
let aleatorio;
aleatorio = generaNumAleatorios(1,41);
let numGanadores;

for(let i=1; i < 7; i++){
    numero = prompt("Ingrese numero para posición " + i);
    if(){
        if(seRepite(numero, arrayNumeros)){
            i--;
            continue;
        }else {
            arrayNumeros[i] = numero;
        }
    }else{
        alert("¡Solo se pueden ingresar numeros!");
    }
    
}

