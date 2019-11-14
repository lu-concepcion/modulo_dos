import {ordenarArray} from '../funciones.js'

const largo = prompt("Indique el largo de su Arreglo");
let arreglo=[];

for (let i = 0; i < largo; i++) {
    arreglo[i] = prompt(`Indique numero #${i+1}`);
}

alert(ordenarArray(arreglo));
