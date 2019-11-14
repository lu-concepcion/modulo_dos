var persona = Object()
var info =""
var flag = 1
do 
{
    persona.nombre= prompt("ingrese nombre")
}
while(!isNaN(persona.nombre))
do
{
    persona.apellido= prompt("ingrese apellido")
}
while(parseInt(persona.apellido))
do
{
    persona.edad= prompt("ingrese edad") 
}
while(isNaN(persona.edad))
do 
{
persona.profesion= prompt("ingrese profesion")
}
while(parseInt(persona.apellido))
do{
info= prompt("¿que informacion desea ver?")
switch(info)
{
    case "nombre":
    alert(persona.nombre)
    flag = 0;
    break
    case "apellido":
    alert(persona.apellido)
    flag = 0;
    break
    case "edad":
    alert(persona.edad)
    flag = 0;
    break
    case "profesion":
    alert(persona.profesion)
    flag = 0;
    break
    default:
    alert ("expresion invalida, intente nuevamente")
}
}while(flag)