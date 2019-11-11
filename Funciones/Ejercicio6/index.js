import { esNumero, generaAleatorios } from '../funciones.js';

let arregloNumeros = [];
let arregloAleatorios = [];
let seRepite = false;
let aleatorio = 0;



for (let i = 0; i < 6; i++) {
    aleatorio = generaAleatorios(1,41);
    for (let a = 0; a < arregloAleatorios.length; a++) {
        if (aleatorio == arregloAleatorios[a]) {
            seRepite = true;
            break;
        }
    }
    if(seRepite) {
        seRepite = false;
        i--;
        continue;
    } else {
        arregloAleatorios[i] = aleatorio;
    }
}

while(true){
    for (let i = 0; i < 6; i++) {
        arregloNumeros[i] = prompt('Ingresa número: ' + (i+1));
    }
    let salir = prompt('Desea ingresar de nuevo (1. Sí - 2. No');
    if (salir == '2') {
        break;
    }
}

let contador = 0;

for (let i = 0; i < arregloNumeros.length; i++) {
    for (let a = 0; a < arregloAleatorios.length; a++) {
        if (arregloNumeros[i] == arregloAleatorios[a]) {
            contador++;
        }
    }
}

alert('Número de aciertos:' + contador)


