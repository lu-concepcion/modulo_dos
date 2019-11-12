// Escribir un algoritmo que reciba dos números. Y te ofrezca realizar las siguientes operaciones aritméticas:
// Sumar
// Multiplicar
// Dividir (ojo con la división por cero)
// Restar

// Utilizar Funciones

import{ sumar, validaNumero, multiplicar, restar, dividir } from '../funciones.js';

let num1=0, num2=0, opcion="";

do{
    num1=prompt("Ingrese un numero");
}while(!validaNumero(num1))

do{
    num2= prompt("Ingrese otro numero");
}while(!validaNumero(num2))

opcion= prompt("Ingrese opcion: sumar, multiplicar, restar, dividir")
if(opcion=="sumar")(alert("el resultado es: "+sumar(num1,num2)))
if(opcion=="multiplicar")(alert("el resultado es: "+multiplicar(num1,num2)))
if(opcion=="restar")(alert("el resultado es: "+restar(num1,num2)))
if(opcion=="dividir" && num2==0){
    do{
        num2= prompt("Ingrese otro numero, no es posible dividir por 0");
    }while(!validaNumero(num2))
}
if(opcion=="dividir" && num2!=0)(alert("el resultado es: "+dividir(num1,num2)))

