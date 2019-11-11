import{
    esPalindromo
} from '../funciones.js';

let listadoNumeros = [];
let numerosGanadores = [];
let contador = 1;
let numero = 0;
let salir = false;

for(let i=0; i<7; i++){
    do{
        let nGanador = Math.random() * (41 - 1) + 1;
        if(numerosGanadores.length != 0){
            for(let j=0; j<numerosGanadores.length; j++){
                if(nGanador == numerosGanadores[j]){
                    salir = false;
                }
            }
            salir = true;
        }
        numerosGanadores[i] = nGanador;
    }while(salir != true);
}

do{
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