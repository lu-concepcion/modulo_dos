import{loto} from '../funciones.js'
let numeros = [];
let j = 0;
do {
    let numeroEntrada = prompt("Ingresa tus numeros")
    for (let i = 0; i < numeros.length; i++) {
        if (numeroEntrada == numeros[i]) j--;
    }
    if (numeroEntrada < 41) {
        numeros[j] = numeroEntrada;
        j++;
        
    }
} while (j < 6);
let aciertos = loto(numeros)
alert(aciertos + " Tus numeros fueron: " + numeros);