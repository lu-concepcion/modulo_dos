var numero = prompt("ingrese un número primo");

var num = parseInt(numero);
var contador =  0;
var conteo = 1;
var cont;

for (cont = parseInt(conteo); i <= num.length; i++) 
{
    if (num % i == 0) 
    {
        contador ++;
    }
}

if (contador == 2) 
{
    alert(num +" "+ "Es un número primo");
} 
else 
{
    alert(num + " " + "No es un número primo");
}
alert(contador);