//ejercicio 4

var lista = "";
var contador = 0;


do {
 var lp = prompt("ingrese lenguaje de programación"); 
 lista = lista + "-" + lp;
 contador = contador+1; 
}while(lp != "python" || contador < 4);


 alert(lista);


