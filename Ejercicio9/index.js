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



var colores ={};
colores.HTML = prompt("Ingrese el color del vehículo en formato HTML");
while((colores.HTML !== "FF0000") && (colores.HTML !== "008000") && (colores.HTML !== "0000FF")){
    colores.HTML  = prompt("Ingrese el color del vehículo en formato HTML");
}




colores.Nombre  = prompt("Ingrese el nombre del color del vehículo");
if(colores.HTML =="FF0000"){
    while(colores.Nombre !== "Rojo"){
        colores.Nombre  = prompt("Ingrese el nombre del color del vehículo");
    }
} else if(colores.HTML =="008000"){
    while(colores.Nombre !== "Verde"){
        colores.Nombre  = prompt("Ingrese el nombre del color del vehículo");
    }
} else if(colores.HTML =="0000FF"){
    while(colores.Nombre !== "Azul"){
        colores.Nombre  = prompt("Ingrese el nombre del color del vehículo");
    }
}

informacionVehiculo.Color= colores;

var verInformacion ="";

verInformacion= prompt("Desea ver la informacion en pantalla? Ingrese Si o No");

if ( verInformacion == "Si"){
    alert("Modelo: " + informacionVehiculo.Modelo + " Marca: " + informacionVehiculo.Marca + " Año: " + informacionVehiculo.Año + " Color HTML : " + informacionVehiculo.Color.HTML + " Nombre Color : " + informacionVehiculo.Color.Nombre);
}