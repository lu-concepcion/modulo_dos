//Escribir un algoritmo solicite la siguiente información de una vehiculo:
//Marca: debe aceptar solo texto
//Modelo: debe aceptar solo texto
//Año: debe aceptar solo número
//Color: debe aceptar código HTML y nombre
//Mostrar información por pantalla (a elección)
//Utilizar OBJETOS

var vehiculo = {
    Marca:"",
    Modelo:"",
    Agno:0,
    Color:{
        Codigo:"",
        Nombre:"",
    }
}

do{
    vehiculo.Marca=prompt("Ingrese la Marca del Vehiculo")
}while(parseInt(vehiculo.Marca));

do{
    vehiculo.Modelo=prompt("Ingrese el Modelo del Vehiculo")
}while(parseInt(vehiculo.Modelo));

do{
    vehiculo.Agno=prompt("Ingrese el Año del Vehiculo")
}while(!parseInt(vehiculo.Agno));

do{
    vehiculo.Color.Codigo=prompt("Ingrese el Código de Color del Vehiculo (6 digitos)")
}while(parseInt(vehiculo.Color.Codigo) || vehiculo.Color.Codigo.length != 6);

do{
    vehiculo.Color.Nombre=prompt("Ingrese el Nombre del Color del Vehiculo")
}while(parseInt(vehiculo.Color.Nombre));

    var info =   "Marca: " + vehiculo.Marca +
                "<br> Modelo: " + vehiculo.Modelo +
                "<br> Año: " + vehiculo.Agno +
                "<br> Nombre del Color y Codigo: " + vehiculo.Color.Nombre + " ("+vehiculo.Color.Codigo+")";

    document.write(info);