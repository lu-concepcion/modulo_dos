var vehiculo = new Object();

do{
    vehiculo.marca = prompt("Ingrese marca: ");
}while(isNaN(vehiculo.marca) == false)

do{
    vehiculo.modelo = prompt("Ingrese modelo: ");
}while(isNaN(vehiculo.modelo) == false)

do{
    vehiculo.año = prompt("Ingrese año: ");
}while(isNaN(parseInt(vehiculo.año)))


