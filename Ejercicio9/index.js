// Escribir un algoritmo solicite la siguiente información de una vehiculo:
// Marca: debe aceptar solo texto
// Modelo: debe aceptar solo texto
// Año: debe aceptar solo número
// Color: debe aceptar código HTML y nombre
// Mostrar información por pantalla (a elección)

// Utilizar OBJETOS


var informacionVehiculo ={};

informacionVehiculo.Marca = prompt("Ingrese la marca del vehículo");

while( isNaN(informacionVehiculo.Marca ) == false){
    informacionVehiculo.Marca  = prompt("Ingrese la marca del vehículo");
}

informacionVehiculo.Modelo = prompt("Ingrese el modelo del vehículo");

while( isNaN(informacionVehiculo.Modelo ) == false){
    informacionVehiculo.Modelo  = prompt("Ingrese el modelo del vehículo");
}

informacionVehiculo.Año = prompt("Ingrese el año del vehículo");

while( isNaN(informacionVehiculo.Año ) == true){
    informacionVehiculo.Año  = prompt("Ingrese el año del vehículo");
}
