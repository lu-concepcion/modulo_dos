//Escribir un algoritmo que solicite números pares, si se ingresa un número impar se debe volver a solicitar otro número.
//Debe aceptar 5 números pares (positivos y comenzando del 2 y culminando en el 20, ambos inclusive)
//Posterior a esto se debe solicitar que tipo de operación quiere realizar con los números:
//Sumar: suma cada uno de los números y entrega el resultado
//Multiplicar: multiplica cada uno de los números y entrega el resultado

var mayor = 0
var nombre_mayor=""
//Ejercicio 5
var contador=0
var numerosPares = [];


do{
    var numero = prompt("Introduce numero");
    if(numero%2==0 && numero>=2 && numero<=20){
        numerosPares[contador]= numero;
        contador++;
        if(contador==4){
            break
        }
    
    }
    

}while(contador>0)
document.write(numerosPares)