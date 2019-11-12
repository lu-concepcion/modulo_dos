// Escribir un algoritmo que reciba dos números. Y te ofrezca realizar las siguientes operaciones aritméticas:
// Sumar
// Multiplicar
// Dividir (ojo con la división por cero)
// Restar

import {sumar, restar, multiplicar, dividir, esNumero, esTexto, convertirMinuscula} from "../funciones.js"

let num1= 0;
let num2= 0;
let respuesta="";

do{
    num1 = parseInt(prompt("ingrese el primer número"));
    if(!esNumero(num1)){
        alert("ingrese un número válido");
    }
}while(!esNumero(num1))

do{
    num2 = parseInt(prompt("ingrese el segundo número"));
    if(!esNumero(num2)){
        alert("ingrese un número válido");
    }
}while(!esNumero(num2))

do{         
    respuesta = prompt("¿Qué operación desea realizar? (Sumar - Restar - Multiplicar - Dividir");
    respuesta = convertirMinuscula(respuesta);
    if(respuesta != "sumar" && respuesta != "restar" && respuesta != "dividir" && respuesta != "multiplicar"){
        alert("Opción incorrecta");
    }
    if(respuesta == "dividir" && num2 == 0){
        alert("No se puede dividir por 0, ingrese nuevamente el segundo número");
        do{
            num2 = prompt("Ingrese el segundo número");
            if(!esNumero(num2)){
                alert("No es número!");
            }
            if(num2 == 0){
                alert("No debe ser 0!");
            }
        }while(!esNumero(num2) || num2 == 0);
    }
}while(respuesta != "sumar" && respuesta != "restar" && respuesta != "dividir" && respuesta != "multiplicar")

if(respuesta == "sumar"){
    alert("Su resultado es: " + sumar(num1, num2));
}else{
    if(respuesta == "restar"){
        alert("Su resultado es: " + restar(num1, num2));
    }else{
        if(respuesta == "multiplicar"){
            alert("Su resultado es: " + multiplicar(num1, num2));
        }else{
            alert("Su resultado es: " + dividir(num1, num2));
        }
    }
}