var nombre;
var Edad;
var Salir = false;
var contador=1;

do{
nombre =prompt("Ingrese Nombre: ");
Edad=parseInt(prompt("Ingrese edad: "));
contador= contador+1;
alert(nombre+""+Edad+"");
if(nombre == "Salir" && contador >=4){
Salir = true;
}
}while(Salir== false );
