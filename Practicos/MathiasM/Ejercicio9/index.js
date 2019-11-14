//Escribir un algoritmo solicite la siguiente información de una vehiculo:
//Marca: debe aceptar solo texto
//Modelo: debe aceptar solo texto
//Año: debe aceptar solo número
//Color: debe aceptar código HTML y nombre
//Mostrar información por pantalla (a elección)

//Utilizar OBJETOS

var vehiculo= {};
vehiculo.color ={};
do{
    var marca = prompt("Ingrese marca del vehiculo");
    if(!parseInt(marca)){
        vehiculo.marca = marca;
    }
}while(parseInt(marca))
do{
    var modelo = prompt("Ingrese modelo del vehiculo");
    if(!parseInt(modelo)){
        vehiculo.modelo = modelo;
    }
}while(parseInt(modelo))
do{
    var año = prompt("Ingrese año del vehiculo");
    if(parseInt(año)){
        vehiculo.año = año;
    }
}while(!parseInt(año))
do{
    var nombreColor = prompt("Ingrese color del vehiculo");
    if(!parseInt(nombreColor)){
        vehiculo.color.nombreColor = nombreColor;
    }
}while(parseInt(nombreColor))
do{
    var codigoColor = prompt("Ingrese codigo del color de su vehiculo");
    if(!parseInt(codigoColor)){
        vehiculo.color.codigoColor = codigoColor;
    }
}while(parseInt(codigoColor))

document.write("Marca: "+vehiculo.marca+"<br>", "Modelo: "+ vehiculo.modelo+"<br>",
"Año: "+vehiculo.año+"<br>","Nombre color: "+ vehiculo.color.nombreColor+"<br>","Codigo Color:"+ vehiculo.color.codigoColor)