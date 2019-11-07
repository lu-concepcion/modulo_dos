// Escribir un algoritmo que solicite números pares, si se ingresa un número impar se debe volver a 
//solicitar otro número.
// Debe aceptar 5 números pares (positivos y comenzando del 2 y culminando en el 20, ambos inclusive)
// Posterior a esto se debe solicitar que tipo de operación quiere realizar con los números:
// Sumar: suma cada uno de los números y entrega el resultado
// Multiplicar: multiplica cada uno de los números y entrega el resultado
var numeros_pares=[];
var i=0;
var resultado_suma=0, resultado_multiplicacion=0;
do{
    var solicita_numero_par = prompt("Ingrese numero par");
    if(solicita_numero_par%2==0 && solicita_numero_par>=2 && solicita_numero_par<=20){
        numeros_pares[i]=parseInt(solicita_numero_par);
        i++;
    }
    if(i==5){
        break;
    }
}while(i>0);
var operacion = prompt("Ingrese una operacion: suma o multiplicacion");
for(var j=0;j<5;j++){
    resultado_suma+=numeros_pares[j];
    resultado_multiplicacion*=numeros_pares[j];
}
if(operacion=='suma'){
    alert(resultado_suma);
}
if(operacion=='multiplicacion'){
    alert(resultado_multiplicacion);
}
