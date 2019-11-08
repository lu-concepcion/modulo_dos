var persona = 
[
    {
        nombre: "",
        edad: ""
    },
]
var i = 0;
var nombre = 0;
var edad = 0;
do
{
    i++;
    nombre = prompt("ingrese un nombre")
    edad = prompt("ingrese edad")
    persona.push({nombre:nombre,edad:edad})
}
while(i<10 || nombre!= "Salir" || edad!= "Salir")