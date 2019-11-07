var cont = 0
var nombre = ""
var cadena = ""
var edad = 0
var edadant = 0
var separacion = " - "
do
{
    nombre = prompt("ingrese un nombre")
    if (nombre!="salir")
    {
        edad = prompt("ingrese edad")
        cont++
        if (edad>edadant)
        {
            cadena=nombre
            edadant=edad
        }
    }
    if ((nombre =="salir")&&(cont>4))
    {
        break
    }
    var exit=((cont<4)||(nombre!="salir"))
}
while(exit)
alert (cadena)