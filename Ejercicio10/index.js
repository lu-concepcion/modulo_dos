/*
Escribir un algoritmo que indique, dado un número romano, este mismo en palabras,
 solo del 1 al 10, ej;

input: X
output: Diez

Utilizar OBJETOS*/

var nn = prompt("Ingresa un numero Romano: ").toUpperCase();
var numeror = [
{
    numero: "uno",
    numeroromano: "I"
},
{
    numero: "Dos",
    numeroromano: "II"
},
{
    numero: "Tres",
    numeroromano: "IIi"
},
{
    numero: "Cuatro",
    numeroromano: "IV"
},
{
    numero: "Cinco",
    numeroromano: "V"
},
{
    numero: "Seis",
    numeroromano: "VI"
},
{
    numero: "Siete",
    numeroromano: "VII"
},    
{
    numero: "Ocho",
    numeroromano: "VIII"
},
{
    numero: "Nueve",
    numeroromano: "IX"
},
{
    numero: "Dies",
    numeroromano: "X"
},
]
for(var i = 0; i<10;i++)
if(nn==numeror[i].numeroromano){
    document.write("El numero romanos es: "+ numeror[i].numero);
    break;

}