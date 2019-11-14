// Escribir un algoritmo solicite la siguiente información de una vehiculo:
// Marca: debe aceptar solo texto
// Modelo: debe aceptar solo texto
// Año: debe aceptar solo número
// Color: debe aceptar código HTML y nombre
// Mostrar información por pantalla (a elección)

// Utilizar OBJETOS

var vehiculo = {};
vehiculo.color= {};
do{
    var marca = prompt("Ingrese marca del vehiculo");
    vehiculo.marca=marca;
}while(parseInt(vehiculo.marca));

do{
    var modelo = prompt("Ingrese modelo del vehiculo");
    vehiculo.modelo=modelo;
}while(parseInt(vehiculo.modelo));

do{
    var agno = prompt("Ingrese año del vehiculo");
    vehiculo.agno=agno;
}while(isNaN(agno));

do{
    var nombreColor = prompt("Ingrese color del vehiculo");
    vehiculo.color.nombreColor=nombreColor;
}while(parseInt(nombreColor));

var codigoColor = prompt("Ingrese codigo del color del vehiculo");
vehiculo.color.codigoColor=codigoColor;

document.write(vehiculo.marca+" "+vehiculo.modelo+" "+vehiculo.agno+" "+vehiculo.color.nombreColor+" "+vehiculo.color.codigoColor)