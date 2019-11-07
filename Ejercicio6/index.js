var numerospares = [0,0,0,0,0]
var cont = 0
var numero = 0
var operacion =""
var resultado = 0
do
{
    numero = prompt ("introduzca un numero")
    if (numero%2==0 && numero<21 && numero>1)
    {
        numerospares[parseInt(cont)]=numero
        cont++
    }
}
while(cont<5)
operacion = prompt ("introduzca operacion")
if (operacion=="sumar")
{
    for (var i=0;i<5;i++)
    {
        resultado = parseInt(resultado) + parseInt(numerospares[i])
    }
}
if (operacion=="multuplicar")
    {
    for (var i=0;i<5;i++)
    {
        resultado = parseInt(resultado) + parseInt(numerospares[i])
    }
}
alert(resultado)
