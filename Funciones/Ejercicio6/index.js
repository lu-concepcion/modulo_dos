import {lotto, buscarEnArray, esNumero} from '../funciones.js';

const numerosElegidos=[];
let aux;
let agregado;
for (let i = 0; i < 6; i++) {
    do {
        aux = prompt(`Elija su numero numero ${i+1}`);
        agregado = false;
        if ((numerosElegidos.length<1 || !buscarEnArray(numerosElegidos, aux)) && aux>0 && aux<42 & esNumero(aux)) {
            numerosElegidos[i]=aux;
            agregado = true;
            
        }
    } while (!agregado);    
    
    }

        
          
alert(lotto(numerosElegidos));