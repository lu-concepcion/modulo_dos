import
{
    porcentaje,
    esNumero
}from'../Funciones.js'
let total
let fraccion
do{
total=prompt("ingrese el total");
}while(!esNumero(total))
do{
fraccion=prompt("ingrese la fraccion");
}while(!esNumero(fraccion))
alert (fraccion +" representa el "+porcentaje(total,fraccion)+"% de "+ total);



