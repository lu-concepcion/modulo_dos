// Escribir un algoritmo que solicite números pares, si se ingresa un número impar se debe volver a solicitar otro número.
// Debe aceptar 5 números pares (positivos y comenzando del 2 y culminando en el 20, ambos inclusive)
// Posterior a esto se debe solicitar que tipo de operación quiere realizar con los números:
// Sumar: suma cada uno de los números y entrega el resultado
// Multiplicar: multiplica cada uno de los números y entrega el resultado


var contador =0;

var numerosAceptados=[];
var Suma=0;
var Multiplicacion =1;
var resultadoOperacion;
while(contador <5){

    var numero = prompt("Ingrese un número par");

    if((2<=parseInt(numero))&&(parseInt(numero)<=20) && (parseInt(numero)%2 == 0)){
        
        numerosAceptados[contador]=parseInt(numero);
        contador++;
    }
}

var operacion = prompt ("Ingrese la operación a realizar");

if (operacion=="Sumar"){
    for (i in numerosAceptados){
        Suma = Suma + numerosAceptados[i];
        resultadoOperacion=Suma;
    }
}else if (operacion=="Multiplicar"){
    for (i in numerosAceptados){
        Multiplicacion=Multiplicacion * numerosAceptados[i];
        resultadoOperacion=Multiplicacion;
    }
}

alert(resultadoOperacion);