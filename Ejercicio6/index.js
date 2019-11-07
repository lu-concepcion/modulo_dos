
numpar = 0;


do{

var ns = prompt ("Ingrese un numero par");


if(ns%2 == 0){

numpar++

}else{ if (ns<2 || ns>20){

  alert ("El numero a ingresar debe ser entre 2 a 20")

}else {

  alert ("El numero ingresado no es par")

}
}


}while(numpar <= 5)
