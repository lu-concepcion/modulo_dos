var persona = [
    {
        nombre:"",
        edad:"0",
    }]
var mayor = 0
var cont = 0
do{
    var nombre = prompt("ingrese un nombre")
    if (nombre!="salir")
    {
    var edad = prompt("ingrese una edad")
    persona.push({ nombre: nombre, edad: edad })
    cont++
    }
    if (persona[cont].edad>persona[cont-1].edad)
    {
        mayor=persona[cont].nombre
    }
    console.log(persona)
}while(cont<5||nombre!="salir")
alert(mayor)