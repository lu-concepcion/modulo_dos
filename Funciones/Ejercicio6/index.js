// import {sorteo} from '../funciones.js';
let x = []
let intentos = 0;

do{

    const loto = prompt ("ingrese un numero de sorteo: "+intentos)
    x.push(loto)
    intentos++

}while(intentos < 6);

alert ("Numeros: "+ x)



    
   



