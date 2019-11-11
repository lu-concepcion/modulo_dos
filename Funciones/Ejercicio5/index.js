



// Escribir un algoritmo que identifique si una palabra es palíndromo.

// Ejemplo: ANILINA

// Utilizar Funciones

import{ numeroVocales, verificarPalindromo } from '../funciones.js';  // importar sin nombre {} para que despues sugiera

let palabra= prompt("Ingrese palíndromo");

console.log(palabra.trim());

alert(verificarPalindromo(palabra));


// palabra=palabra.trim();

// let palabraIngresada=[];
// let palabraAlReves=[];
// let palindromo=1;

// if (palabra.length >1){
//     for (var i=0; i<=palabra.length-1; i++){
//         palabraIngresada[i]=palabra.charAt(i);
//         palabraAlReves[i]= palabra.charAt(palabra.length-1-i);
//         if (palabraIngresada[i] !==palabraAlReves[i]){
//             palindromo=0
//         }
//     } 
// }else {
//     palindromo=0
// }


// if (palindromo==1){
//     return "La palabra ingresada es un palíndromo"
// } else {
//     return "La palabra ingresada no es un palíndromo"

// }


