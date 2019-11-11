
// Escribir un algoritmo que genere un sorteo del juego de azar LOTO, para esto, debe solicitar 6 números al usuario, 
//posterior a eso, dar la opción de cambiar los números elegidos, o realizar sorteo. El resultado debe mostrar cuantos 
//aciertos tuvo la persona.

// Utilizar Math.random(), ver documentación.

// Utilizar Funciones

let numerosPersona=[];

for (let i=0; i<6; i++){
    let numero=prompt("Ingrese un numero");
    if (numerosPersona.includes(numero)) {
        console.log("El numero ya esta");
        numero=prompt("Ingrese un numero")
    } 
    numerosPersona[i]=numero;

}

