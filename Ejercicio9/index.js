var Vehiculo = new Object();
Vehiculo.Marca;
Vehiculo.Modelo;
Vehiculo.Año;
Vehiculo.Color;
do {
    Vehiculo.Marca = prompt("Ingrese una Marca")
} while (isNaN(Vehiculo.Marca) == false);
do {
    Vehiculo.Modelo = prompt("Ingrese Modelo")
} while (isNaN(Vehiculo.Modelo) == false);
do {
    Vehiculo.Año = prompt("Ingrese el Año")
} while (parseInt(Vehiculo.Año) == false);
do {
    Vehiculo.Color = prompt("Ingrese un Color")
} while (isNaN(Vehiculo.Color) == false);
var consulta;
switch (consulta = prompt("Que desea revisar?")) {
    case "Marca":
        document.write(Vehiculo.Marca)
        break;
    case "Año":
        document.write(Vehiculo.Año)
        break;
    case "Modelo":
        document.write(Vehiculo.Modelo)
        break;
    case "Color":
        document.write(Vehiculo.Color)
        break;

    default:
        break;
}