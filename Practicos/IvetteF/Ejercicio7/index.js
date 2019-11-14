var sum = [0,1];
var cero = 0;
var cifras = prompt("Ingrese una cifra entre 3 y 15 para generar la serie Fibonacci");
var cifravalida =0;

do
{
cifras = prompt("Número inválido, ingrese una cifra entre 3 y 15 para generar la serie Fibonacci");
    if (cifras >2 && cifras<16)
    {
        cifravalida =cifras;
    }
}
while(cifras <3 || cifras>15)

if (cifras >2 && cifras<16)
{
    cifravalida = cifras;
    for(var i = 2; i<=cifravalida; i++)
    {
        sum[i] = parseInt(sum[i-2])+parseInt(sum[i-1]);
    }alert(sum)
}

