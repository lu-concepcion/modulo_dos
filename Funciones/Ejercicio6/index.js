 import {sorteo} from '../funciones.js';
let x = []
let intentos = 0;
let variables = 0;

do{
    do{

        
        const loto = prompt ("ingrese un numero de sorteo: "+intentos)

        if(loto < 1 || loto > 41){

            alert("Los numeros deben de estar entre 1 a 41")

        }else{
        
            x.push(loto)
            intentos++
            variables++
        }

    }while(variables < 1);
}while(intentos < 6);

sorteo(x)



    
   



