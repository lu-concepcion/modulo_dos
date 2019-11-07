var limite = 0
var limite =prompt("introduzca el limite de la serie")
var serie = []
if (limite<=15 &&limite>=3)
{
    serie[0]=0
    serie[1]=1
    serie[2]=1
    for (var i=3;i<=limite;i++)
        {   
            var j=i--
            serie[i]=parseInt(serie[j]+serie[j--])
        }
    document.write(serie)
}
else
{
    alert("limite invalido")
}