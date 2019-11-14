import{
    ordenarArrayMayorMenor,
    ordenarArrayMenorMayor,
    esNumero,
    imprimirArray
}from '../funciones.js';

let numero;
let array = [];
let contador = 10;
do{
    do{
        numero = prompt("Ingrese " + contador + " número/s");
    }while(!esNumero(numero) || numero == "");
    
    array.push(numero);
    contador--;
}while(contador != 0);

alert("Ingresados: " + imprimirArray(array) + "\nMenor a mayor: " + imprimirArray(ordenarArrayMenorMayor(array)) + "\nMayor a menor: " + imprimirArray(ordenarArrayMayorMenor(array)));