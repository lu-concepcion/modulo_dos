/*Escribir un algoritmo solicite la siguiente información de una vehiculo:
Marca: debe aceptar solo texto
Modelo: debe aceptar solo texto
Año: debe aceptar solo número
Color: debe aceptar código HTML y nombre
Mostrar información por pantalla (a elección)

Utilizar OBJETOS*/

var vehiculo={};
var marca;
var modelo;
var año;
var color={};
vehiculo.color=color;
var codigo ;
var nombrec;
var r= true;

//validando marca
do{
    marca = prompt("Ingrese marca: ");
    if(isNaN(marca)==true){
        vehiculo.marca=marca;
        break;
    }
    else{
        alert("Es numero ingrese nuevamente: ");
        r=true;
    }
}while(r==true);

//validando modelo

do{
    modelo = prompt("Ingrese modelo: ");
    if(isNaN(modelo)==true){
        vehiculo.modelo=modelo;
        break;
    }
    else{
        alert("Es numero ingrese nuevamente: ");
        r=true;
    }
}while(r==true);
//validando año
do{
    año = parseInt(prompt("Ingrese año: "));
    if(isNaN(año)==false){
        vehiculo.año=año;
        break;
    }
    else{
        alert("Es numero ingrese nuevamente: ");
        r=true;
    }
}while(r==true);

vehiculo.color.codigo=prompt("ingrese color en codigo: ");
vehiculo.color.nombrec=prompt("ingrese nombre del color: ");

document.write(" Marca: \n"+vehiculo.marca+" Modelo: \n "+vehiculo.modelo+"  Año: \n "+vehiculo.año+" ColorCodigo: \n "+vehiculo.color.codigo+" Nombre Color:  \n"+vehiculo.color.nombrec);