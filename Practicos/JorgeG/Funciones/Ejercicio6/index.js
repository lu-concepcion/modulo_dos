// Escribir un algoritmo que genere un sorteo del juego de azar LOTO, para esto, debe solicitar 6 
// números al usuario, posterior a eso, dar la opción de cambiar los números elegidos, o realizar sorteo. 
// El resultado debe mostrar cuantos aciertos tuvo la persona.

// Utilizar Math.random(), ver documentación.

// Utilizar Funciones

import { generaLoteria, buscarElemento } from '../funciones.js'
let misNumeros=[],contador=0
do{
    let consulta = prompt("Ingrese su numero de Loto")
    if(consulta>36 || consulta<1 || buscarElemento(misNumeros,consulta)){
        alert("Numero no valido, o repetido")
    }else{
        misNumeros[contador]=consulta;
        contador++;
    }
}while(contador<6);
let consulta = prompt("Ingrese su numero de Loto")
alert(generaLoteria())