import
{
    aciertosSorteo,
    sorteo
}from'../Funciones.js'
let entrada=[0,0,0,0,0,0]
let contador=0
do{
entrada[contador] = prompt("ingrese un numero")
if(entrada[contador]>="1" && entrada[contador]<="41")
{
    contador++
}
}while(contador<6)
let ganadores= []
ganadores = sorteo(1,41)
alert(aciertosSorteo(ganadores,entrada))
alert (ganadores+"-"+entrada)
