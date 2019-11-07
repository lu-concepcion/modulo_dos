
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

  alert ("El numero ingresado no es par")

}
}
}while(numpar <= 5)

if (ope == "multiplicar"){

}else{
  
}
