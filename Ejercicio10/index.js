var romanos = [{
    id:"uno",
    simbolo:"I"
},
{
    id:"dos",
    simbolo:"II"
},
{
    id:"tres",
    simbolo:"III"
},
{
    id:"cuatro",
    simbolo:"IV"
},
{
    id:"cinco",
    simbolo:"V"
},
{
    id:"seis",
    simbolo:"VI"
},
{
    id:"siete",
    simbolo:"VII"
},
{
    id:"ocho",
    simbolo:"VIII"
},
{
    id:"nueve",
    simbolo:"IX"
},
{
    id:"diez",
    simbolo:"X"
}]
var ingresado
do{
ingresado = prompt("ingrese un numero romano")
}while(!isNaN(ingresado))
for (var i=0;i<10;i++)
{
    if(romanos[i].simbolo==ingresado)
    {
        alert (romanos[i].id)
        break
    }
}