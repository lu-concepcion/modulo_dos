var marca;
var modelo;
var año;
var color;
var vehiculo = new Object();

do {
    var marca = prompt("Ingrese el modelo del vehiculo");
} while (!isNaN(marca));
vehiculo.marca = marca;

do {
    var modelo = prompt("Ingrese el modelo del vehiculo");
} while (!isNaN(parseInt(modelo)));
vehiculo.modelo = modelo;

alert(vehiculo.marca);