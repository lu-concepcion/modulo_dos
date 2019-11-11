import
{
    esTexto,
    palindromo
}from'../Funciones.js'
let entrada
do{
entrada = prompt("ingrese una palabra")
}while(!esTexto(entrada))
if(palindromo(entrada))
{
    alert("es un palindromo")
}
else
{
    alert("no es un palindromo")
}


