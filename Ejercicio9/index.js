//Escribir un algoritmo solicite la siguiente información de una vehiculo:
//Marca: debe aceptar solo texto
//Modelo: debe aceptar solo texto
//Año: debe aceptar solo número
//Color: debe aceptar código HTML y nombre
//Mostrar información por pantalla (a elección)
//Utilizar OBJETOS
var vehiculo = {};
do{
vehiculo.marca = prompt("ingrese marca de vehiculo: ")
}while(!isNaN(vehiculo.marca));

do{
vehiculo.modelo = prompt("ingrese modelo de vehiculo: ")
}while(!isNaN(vehiculo.marca));
do{
vehiculo.año = prompt("ingrese año de vehiculo: ")  
}while(isNaN(parseInt(vehiculo.año)));
do{
vehiculo.color = prompt( "ingrese color: ")
}while(

)