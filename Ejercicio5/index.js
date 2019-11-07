var contador = 0;
var em = 0;
var nm = "";
do {

var nombre = prompt("ingrese nombre:")

if (nombre == "salir" ) {
   if (contador > 3) {
     break;
   }   
}
else {

contador++;    
var edad = prompt("ingrese edad");
if (edad > em ) {
    em = edad;
    nm = nombre;
}
}
}while(nombre != "salir" || contador < 4 );
alert("El mas viejo es " + nm);
