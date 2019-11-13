import {lotto, buscarEnArray} from '../funciones.js';

const numerosElegidos=[];
let aux;
let agregado;
for (let i = 0; i < 6; i++) {
    do {
        aux = prompt(`Elija su numero numero ${i+1}`);
        agregado = false;
        if (numerosElegidos.length<1 || !buscarEnArray(numerosElegidos, aux)) {
            numerosElegidos[i]=aux;
            agregado = true;
            
        }
    } while (!agregado);    
    
    }

   alert(numerosElegidos)
        
      

    




//alert(lotto(numerosElegidos));