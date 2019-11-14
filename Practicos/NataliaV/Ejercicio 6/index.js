var numero;
var operacion;
var suma=0;
var multiplicacion=1;

for(var i=0;i<5;i++){
numero = parseInt(prompt("Ingrese numero Par: "+(i)));
if (numero%2==0 && (numero>=2 && numero <=20)){
 suma = suma + numero;
 multiplicacion = multiplicacion * numero;
}
else{
    alert("No Puedes Ingresar numeros Impar o numeros fuera de rango")
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


