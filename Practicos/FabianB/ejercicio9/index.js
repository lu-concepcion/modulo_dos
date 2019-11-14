var vehiculo = new Object ();

var mar;
var model;
var year;
var col;



do {
    var mar = prompt("Ingrese marca de vehiculo")
} while (!isNaN(parseInt(mar)));
vehiculo.marca = mar;

do {
   var model = prompt("ingrese modelo")
} while (!isNaN(parseInt(model)));
vehiculo.modelo = model;

do {
    var year = prompt("Ingrese año del vehiculo")
} while (isNaN(parseInt(year)));
vehiculo.año = year;

do { 
    var col = prompt("ingrese color del vehiculo")
 } while (!isNaN(parseInt(col)));
 vehiculo.color = col;

alert(vehiculo.marca + " - " + vehiculo.modelo + " - " + vehiculo.año +  " - " + vehiculo.color)
