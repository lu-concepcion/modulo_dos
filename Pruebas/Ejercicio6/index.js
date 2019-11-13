import{loto} from '../funciones.js'
let numeros = [];
/*for (let i = 0; i < 6; i++) {
    numeros[i] = prompt("Ingresa tus numeros")    
}*/
let j = 0;
do {
    let numeroEntrada = prompt("Ingresa tus numeros")
    if (numeroEntrada < 41) {
        numeros[j] = numeroEntrada;
        j++;
        
    }
} while (j < 6);
let aciertos = loto(numeros)
alert(aciertos);