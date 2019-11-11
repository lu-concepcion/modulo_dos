import { getNumeroRandom } from '../funciones.js'

const arrayNumeros = [];
let aleatorio;
aleatorio = getNumeroRandom(1,41);
let numGanadores;

for(let i=1; i < 7; i++){
    arrayNumeros[i] = prompt("Ingrese numero para posición " + i);
    if(arrayNumeros[i] == aleatorio){
        numGanadores = arrayNumeros[i];
    }
}

