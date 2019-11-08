var numero = new Object();

numero.simbolo = ["I", "II","III", "IV", "V", "VI", "VII", "VIII", "IX", "X"]
numero.valor = [1,2,3,4,5,6,7,8,9,10]

var ingreso = prompt("Ingrese un número romano");

for(var i = 0; i<10; i++)

{
    while(ingreso != numero.simbolo[i])
    {
        ingreso = prompt("Error, Ingrese un número romano nuevamente");
    }
    if(ingreso == numero.simbolo[i])
    {
        alert(numero.valor[i])
    }
}