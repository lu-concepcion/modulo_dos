marca = "";
modelo = "";
año = "";
color = "";
var vehiculo = new Object();

do{
   var año = prompt ("Ingrese al año del vehiculo");
}while(Number.isNaN(parseInt(año)));
vehiculo.año = año;

do{
    var marca = prompt("Ingrese la marca del vehiculo");
}while(Number.isNaN(parseInt(marca))==false);
vehiculo.marca = marca;

do{
    var modelo = prompt("Ingrese el modelo del auto");
}while(Number.isNaN(parseInt(modelo))==false);
vehiculo.modelo = modelo;

var color = prompt("Ingrese el color del auto:");
vehiculo.color = color;

