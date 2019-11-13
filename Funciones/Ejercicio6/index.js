import {repiteNumero, numeroRandom, esNumero, convertirMinuscula} from '../funciones.js'

let numeros = [];
let numAleatorios = [];
let aleatorio = 0;
let numeroUsuario = 0;
let ciclo = true;

for (let i = 0; i < 6; i++) {
    aleatorio = numeroRandom(1,41);
    if(repiteNumero(aleatorio, numAleatorios)) {
        i--;
        continue;
    } else {
        numAleatorios[i] = aleatorio;
    }
}

while(ciclo){

    for(let i=0; i<6; i++){
        while(true){
            numeroUsuario = prompt("ingresa el " + (i+1) + " número");
            if(esNumero(parseInt(numeroUsuario))){
                break;
            }
            alert("Por favor ingresa un número válido")
        }

        if(repiteNumero(numeroUsuario, numeros)){
            alert("no puede repetir los números, porfavor ingrese otro");
            i--;
            continue;
        }else {
            numeros[i] = numeroUsuario;
        }
    }

    while(ciclo){
        let salir  = convertirMinuscula(prompt("¿Desea cambiar sus números? (Si / No)"));
        if (salir != "si" && salir != "no") {
            alert("Ingrese una opción correcta");
            continue;
        } else if (salir == "si"){
            numeros = [];
            break;
        } else {
            ciclo = false;
        }
    }
}

let contador = 0;

for (let i = 0; i < numAleatorios.length; i++) {
    console.log(numAleatorios[i]);
    
}

for (let i = 0; i < numeros.length; i++) {
    for (let a = 0; a < numAleatorios.length; a++) {
        if (numeros[i] == numAleatorios[a]) {
            contador++;
        }
    }
}

alert("Número de aciertos: " + contador);