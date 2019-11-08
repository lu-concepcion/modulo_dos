var persona = [
    {
        nombre:"",
        edad:"0",
    }]
var edadEntrada = 0
var cont = 0
do{
    var nombre = prompt("ingrese un nombre")
    var edad = prompt("ingrese una edad")
    persona.push({ nombre: nombre, edad: edad })
    cont++
    console.log(persona)
}while(cont<5||entrada!="salir")