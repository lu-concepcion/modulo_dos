
import {menorMayor, mayorMenor} from '../funciones.js';
    let cadenaNumeros = [];


    for (let i=0; i<3; i++){
    
        let numero = prompt ("ingrese numeros para el arreglo: "+cadenaNumeros.length)
        numero = parseInt (numero);
        cadenaNumeros.push(numero)
    
    }
    
    
    
    menorMayor(cadenaNumeros)




