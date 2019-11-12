//Escribir un algoritmo que reciba dos números. Y te ofrezca realizar las siguientes operaciones aritméticas:
//Sumar
//Multiplicar
//Dividir (ojo con la división por cero)
//Restar
//Utilizar Funciones

import {suma,resta,multiplicacion,division} from '../funciones.js'; 
let num1 = prompt("ingrese un numero: ");
let num2 = prompt("ingrese un segundo numero: ");
let operacion = "";
do {
     operacion = prompt("ingrese la operación que desea realizar; suma, resta, multiplicacion o division.");
    
    if(operacion == "suma" ){
    alert(suma(num1,num2));
  
    }
    else if(operacion == "resta" ){
        alert(resta(num1,num2));
  
    }
     else if(operacion == "multiplicacion"){
        alert(multiplicacion(num1,num2));
  
    }
      else if(operacion == "division" ){
        alert(division(num1,num2));
    
    }

} while (operacion != "suma" & operacion != "resta" & operacion != "multiplicacion" & operacion != "division")