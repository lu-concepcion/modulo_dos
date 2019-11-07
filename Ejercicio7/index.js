var limite = 0
var limite =prompt("introduzca el limite de la serie")
var serie = [0,1]
if (limite<16 && limite>2)
{
    for (var i=2;i<=limite;i++)
        {   
             serie[i]=parseInt(serie[i-1])+parseInt(serie[i-2])
           
        }
        document.write(serie)
}
else
{
    alert("limite invalido")
}
