// Escribir un algoritmo que reciba dos números. Y te ofrezca realizar las siguientes operaciones aritméticas:
// Sumar
// Multiplicar
// Dividir (ojo con la división por cero)
// Restar

// Utilizar Funciones

import { sumar, multiplicar, dividir, restar } from '../funciones.js'
let numero1 = prompt ("Ingrese el primer numero")
let numero2 = prompt ("Ingrese el segundo numero")
let operacion = prompt ("Que operacion quiere realizar? \n1.-Sumar\n2.-Multiplicar\n3.-Dividir\n4.-Restar")
if(operacion==1){
    alert(sumar(numero1,numero2))
}else{
    if(operacion==2){
        alert(multiplicar(numero1,numero2))
    }else{
        if(operacion==3){
            alert(dividir(numero1,numero2))
        }else{
            if(operacion==4){
                alert(restar(numero1,numero2))
            }else{
                alert("No existe esa opcion")
            }
        }
    }
}