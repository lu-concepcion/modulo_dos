// Escribir un algoritmo que genere un sorteo del juego de azar LOTO, para esto, debe 
//solicitar 6 números al usuario, posterior a eso, dar la opción de cambiar los números elegidos,
// o realizar sorteo. El resultado debe mostrar cuantos aciertos tuvo la persona.
// Utilizar Math.random(), ver documentación.
// Utilizar Funciones

import{ sorteoLoteria, guardarNumero } from '../funciones.js';
 
let contador=0;
 do{
    let numeros = prompt("Ingrese sus numeros");
    if(parseInt(numeros) && parseInt(numeros)>0 && parseInt(numeros)<37){
        guardarNumero(numeros)
        contador++;
    }
 }while(contador<6)
 sorteoLoteria();
 

