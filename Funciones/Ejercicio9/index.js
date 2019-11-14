import {ordenarArray} from '../funciones.js'

const largo = prompt("Indique el largo de su Arreglo");
let arreglo=[];

for (let i = 0; i < largo; i++) {
    arreglo[i] = prompt(`Indique numero #${i+1}`);
}

alert(ordenarArray(arreglo));
// 4 4 4 1 me dio
// 2 3 1 4  por esto

//  4  5  2  1  2

//  4  5  2  1  2  

//  4  5  5  1  2 n[i] = n[i-1]

//     4  5   1  2

//  2  4  5   1  2

//     2  4   5  2

//  1  2  4   5  2

//        2   4  5

//  4  5  2  1  2

