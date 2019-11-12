// Escribir un algoritmo que reciba dos números. Y te ofrezca realizar las siguientes operaciones aritméticas:
// Sumar
// Multiplicar
// Dividir (ojo con la división por cero)
// Restar

// Utilizar Funciones



import{ dividir, multiplicar, restar, sumar } from '../funciones.js';  // importar sin nombre {} para que despues sugiera

let numero1=prompt("Ingrese el primer numero");
let numero2=prompt("Ingrese el segundo numero");

let operacion=prompt("Ingrese operación a realizar: Sumar, Restar, Multiplicar o Dividir");

if (operacion=="Sumar"){
    alert(sumar(numero1,numero2))
} else if (operacion=="Restar"){
    alert(restar(numero1,numero2))
} else if (operacion=="Dividir"){
    alert(dividir(numero1,numero2))
} else if (operacion=="Multiplicar"){
    alert(multiplicar(numero1,numero2))
} else {
    alert("Operación no válida")
}






