
numpar = 0;
var num = [2,4,6,8,10];

do{


var ns = prompt ("Ingrese un numero par");

if (ns<2 || ns>20){

  alert ("El numero a ingresar debe ser entre 2 a 20")

}else{ 
  
  if(ns%2 == 0){
  
  num[numpar] = parseInt (numpar);  
  numpar++

}else {

  alert ("El numero ingresado no es par");

}
}
}while(numpar <= 4)

var ope = prompt ("Ingrese una operacion a realizar: Multiplicar, Sumar. Para finalizar, escriba Salir")
if (ope == "multiplicar"){

  var total = num[0]*num[1]*num[2]*num[3]*num[4];

}else{
  
  if(ope == "sumar"){

  var total = num[0]+num[1]+num[2]+num[3]+num[4];

}else{

  alert("La operacion no logra reconocerse" )
  
}
}
document.write("El valor es: "+ total);
