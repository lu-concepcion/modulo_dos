var numero;
var operacion;
var suma=0;
var multiplicacion=1;

for(var i=1;i<=5;i++){
numero = parseInt(prompt("Ingrese numero Par: "+(i)));
if (numero%2==0){
 suma = suma + numero;
 multiplicacion = multiplicacion * numero;
}
else{
    alert("No Puedes Ingresar numeros Impar")
    i--;
}

if(numero >= 2 && numero <=20){

}else{
    alert("No puede agregar numeros fuera de rango");
    i--;

}

}
operacion= prompt("Que operacion decea ingresar suma o multiplicacion: ");
if(operacion == "suma"){
    alert(suma);
}else{
    if(operacion== "multiplicacion")
   alert( multiplicacion);
}


