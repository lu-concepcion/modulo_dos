// Escribir un algoritmo que genere un sorteo del juego de azar LOTO, para esto, debe solicitar 6 números al usuario, posterior a eso, dar la opción de cambiar los números elegidos, o realizar sorteo. El resultado debe mostrar cuantos aciertos tuvo la persona.
// Utilizar Math.random(), ver documentación.
// Utilizar Funciones
import {} from '../funciones.js'; 

let numerosIngresados =[]
for (let i = 0; i < 6; i++) {
    numerosIngresados[i] = prompt(`ingrese numero ${i+1}`)    
}
 alert(numerosIngresados);