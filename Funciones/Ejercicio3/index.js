import
{
    porcentaje,
    esNumero
}from'../Funciones.js'
do{
const total=prompt("ingrese el total");
}while(!esNumero)
do{
const fraccion=prompt("ingrese la fraccion");
}while(!esNumero)
alert (porcentaje(total,fraccion)+"%");



