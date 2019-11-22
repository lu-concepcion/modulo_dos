import { esNumero, generaAleatorios, seRepite } from '../funciones.js';

let arregloNumeros = [];
let arregloAleatorios = [];
let aleatorio = 0;
let salirCiclo = true;
let numeroUsuario = 0;

for (let i = 0; i < 6; i++) {
    aleatorio = generaAleatorios(1,41);
    if(seRepite(aleatorio, arregloAleatorios)) {
        i--;
        continue;
    } else {
        arregloAleatorios[i] = aleatorio;
    }
}

while(salirCiclo){
    for (let i = 0; i < 6; i++) {
        while(true){
            numeroUsuario = prompt('Ingresa número: ' + (i+1));
            if (esNumero(parseInt(numeroUsuario))) {
                break;
            }
            alert('Solo ingresa números');
        }
        
        if (seRepite(numeroUsuario, arregloNumeros)) {
            alert('Número ya existe, ingresalo nuevamente');
            i--;
            continue;
        } else {
            arregloNumeros[i] = numeroUsuario;
        }
    }
    while(salirCiclo){
        let salir = prompt('Desea ingresar de nuevo (1. Sí - 2. No)');
        if (salir != '2' && salir != '1') {
            alert('Ingrese una opción correcta');
            continue;
        } else if (salir == '1'){
            arregloNumeros = [];
            break;
        } else {
            salirCiclo = false;
        }
    }
}

let contador = 0;

for (let i = 0; i < arregloAleatorios.length; i++) {
    console.log(arregloAleatorios[i]);
    
}

for (let i = 0; i < arregloNumeros.length; i++) {
    for (let a = 0; a < arregloAleatorios.length; a++) {
        if (arregloNumeros[i] == arregloAleatorios[a]) {
            contador++;
        }
    }
}

alert('Número de aciertos: ' + contador)


