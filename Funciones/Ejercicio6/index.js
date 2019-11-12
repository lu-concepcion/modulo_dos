import{
    esPalindromo
} from '../funciones.js';

let listadoNumeros = [];
let numerosGanadores = [];
let contador = 1;
let salir = false;

const size = 7;
for(let i=0; i<size; i++){ //Genera números aleatorios
    salir = true;
    do{
        let nGanador = parseInt(Math.random() * (41 - 1) + 1);
        if(numerosGanadores.length != 0){ //Si no hay número aún
            numerosGanadores.push(nGanador);
        }else{
            for(let j=0; j<numerosGanadores.length; j++){
                if(nGanador == numerosGanadores[j]){ //Que no se repitan
                    salir = false;
                }
            }
            if(salir == true){ //No se repitió
                numerosGanadores.push(nGanador);
            }
        }
    }while(salir != true);
}

do{ //Pide números que no se repitan y >0 , <41
    do{
        salir = true;
        let numero = prompt("Numero para la lotería entre 1 y 41 (" + contador +")");
        if(numero < 1 || numero > 41){ //Mensaje de error si no está en el rango
            alert("El rango debe ser entre 1 y 41");
            salir = false;
        }else{
            if(listadoNumeros.length != 0){ //Comprueba si ya fue ingresado el número
                for(let i=0; i<listadoNumeros.length; i++){
                    if(listadoNumeros[i] == numero){
                        alert("El número ya fue ingresado");
                        salir = false;
                    }
                }
            }
        }
        if(salir){
            listadoNumeros.push(numero);
            contador++;
        }
    }while(salir != true);
}while(listadoNumeros.length != 6);

contador = 0;

let mensaje = "Los números de la lotería son: ";
for(let i=0; i<numerosGanadores.length; i++){
    mensaje += numerosGanadores[i];
    if(i != (numerosGanadores.length-1)){
        mensaje+= " - ";
    }
}

mensaje += "\nLos números escogidos son: ";
for(let i=0; i<listadoNumeros.length; i++){
    mensaje+= listadoNumeros[i];
    if(i != (listadoNumeros.length-1)){
        mensaje+= " - ";
    }
}

for(let i=0; i<listadoNumeros.length; i++){
    for(let j=0; j<numerosGanadores.length; j++){
        if(numerosGanadores[j] == listadoNumeros[i]){
            contador++;
            break;
        }
    }
}
mensaje += "\nCantidad de aciertos: " + contador;

alert(mensaje);