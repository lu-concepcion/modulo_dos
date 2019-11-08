var nombre;
var Edad;
var Salir = false;
var contador=1;

do{
nombre =prompt("Ingrese Nombre: ");
if(nombre == "Salir" && contador >=4){
Salir = true;
}
Edad=parseInt(prompt("Ingrese edad: "));
contador= contador+1;

}while(Salir== false );
