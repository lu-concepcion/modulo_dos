import {repiteNumero, numeroRandom, esNumero} from '../funciones.js'

let numeros = [];
let numAleatorios = [];
let aleatorio = 0;
let numeroUsuario = 0;

for (let i = 0; i < 6; i++) {
    aleatorio = numeroRandom(1,41);
    if(repiteNumero(aleatorio, numAleatorios)) {
        i--;
        continue;
    } else {
        numAleatorios[i] = aleatorio;
    }
}

