var cont = 0
var lpcadena = ""
var lpingresado = ""
var separacion = " - "
var exit
do
{
    var lpingresado = prompt("introduzca un lp")
    if(lpingresado!="Python")
        {
            lpcadena = lpcadena+separacion+lpingresado
            cont++
        }
    exit= ((lpingresado!="Python")||(cont<4)) 
}while (exit)
var ultimo = " - Python"
alert(lpcadena+ultimo)