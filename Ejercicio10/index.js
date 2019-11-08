var numero = [{
    nombreNumero: "Uno",
    numeroRomano: "I"
},
{
    nombreNumero: "Dos",
    numeroRomano: "II"
},
{
    nombreNumero: "Tres",
    numeroRomano: "III"
},
{
    nombreNumero: "Cuatro",
    numeroRomano: "IV"
},
{
    nombreNumero: "Cinco",
    numeroRomano: "V"
},
{
    nombreNumero: "Seis",
    numeroRomano: "VI"
},
{
    nombreNumero: "Siete",
    numeroRomano: "VII"
},
{
    nombreNumero: "Ocho",
    numeroRomano: "VIII"
},
{
    nombreNumero: "Nueve",
    numeroRomano: "IX"
},
{
    nombreNumero: "Diez",
    numeroRomano: "X"
}];

var ingreso = prompt("Ingrese un número romano");

for(var i = 0; i<10; i++)

{
    while(ingreso!=numero[i].numeroRomano)
{
    ingreso = prompt("Error,Ingrese un número romano nuevamente");
}
    while(ingreso == numero[i].numeroRomano)
    {
        alert(numero[i].nombreNumero)
    }


}