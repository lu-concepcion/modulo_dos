import
{
    esNumero,
    esTexto,
    aMayusculas,
    aMinusculas,
    contadorVocales
}from'../Funciones.js'
let entrada
do{
entrada = prompt("ingrese un texto")
}while(!esTexto(entrada))
alert ("la cantidad de vocales es "+contadorVocales(entrada))



