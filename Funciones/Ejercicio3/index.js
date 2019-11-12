// Escribir un algoritmo que reciba dos números y calcule el porcentaje del segundo con respecto al primero, ej:
// Primer número: 90
// Segundo número: 40
// Resultado: 36%

// Utilizar Funciones

let num1=0, num2=0;
do{
    num1=prompt("Ingrese un numero");
}while(!validaNumero(num1))

do{
    num2= prompt("Ingrese otro numero");
}while(!validaNumero(num2))