var marca;
var modelo;
var año;
var color;
var vehiculo = new Object();

do {
    var marca = prompt("Ingrese el modelo del vehiculo");
} while (!isNaN(parseInt(marca)));

vehiculo.marca = marca;

alert(vehiculo.marca);