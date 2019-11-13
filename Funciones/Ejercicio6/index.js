
// Escribir un algoritmo que genere un sorteo del juego de azar LOTO, para esto, debe solicitar 6 números al usuario, 
//posterior a eso, dar la opción de cambiar los números elegidos, o realizar sorteo. El resultado debe mostrar cuantos 
//aciertos tuvo la persona.

// Utilizar Math.random(), ver documentación.

// Utilizar Funciones

import{ aciertosLoto  } from '../funciones.js';  // importar sin nombre {} para que despues sugiera


let numerosPersona=[];
let cambiarNumeros="No";

do{
    for (let i=0; i<6; i++){
        let numero=prompt("Ingrese un numero");
        if ((numerosPersona.includes(numero)) || (parseInt(numero)>36)) {
            numero=prompt("Ingrese un numero")
        } 
        numerosPersona[i]=numero;
    }
    cambiarNumeros=prompt("Desea cambiar los números? Ingrese Si o No");
} while(cambiarNumeros =="Si")






const resultados=aciertosLoto(numerosPersona);

console.log("El número de aciertos es " + resultados.numeroAciertos);
console.log( " Los números del sorteo fueron: " + resultados.nuemerosSorteo);
console.log(  " Tus números fueron "+ numerosPersona) 