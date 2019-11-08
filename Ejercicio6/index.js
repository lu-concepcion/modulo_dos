//Escribir un algoritmo que solicite números pares, si se ingresa un número impar se debe volver a solicitar otro número.
//Debe aceptar 5 números pares (positivos y comenzando del 2 y culminando en el 20, ambos inclusive)
//Posterior a esto se debe solicitar que tipo de operación quiere realizar con los números:
//Sumar: suma cada uno de los números y entrega el resultado
//Multiplicar: multiplica cada uno de los números y entrega el resultado

//Ejercicio 6
var contador=0
var numerosPares = [];
var sumar=0,multiplicar=1;


do{
    var numero = prompt("Introduce numero");
    if(numero%2==0 && numero>=2 && numero<=20){
        numerosPares[contador]= parseInt(numero);
        
        if(contador==4){
            break
        }
        contador++;
    }
    

}while(contador>0)
document.write(numerosPares)

var operacion = prompt("Opciones:ingrese si desea sumar o multiplicar");
for( i=0;i<5;i++){
    sumar+=numerosPares[i];
    multiplicar*=numerosPares[i];
}
if(operacion=='sumar'){
    alert(sumar);
}
if(operacion=='multiplicar'){
    alert(multiplicar);
}