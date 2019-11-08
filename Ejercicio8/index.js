//Escribir un algoritmo solicite la siguiente información de una persona:
//Nombre: debe aceptar solo texto
//Apellidos: debe aceptar solo texto
//Edad: debe aceptar solo número
//Profesión: debe aceptar solo texto
//Mostrar información por pantalla (a elección)

//Utilizar OBJETOS

var persona= {};
do{
    var nombre= prompt("Ingrese nombre");
    if(!parseInt(nombre)){
        persona.nombre = nombre;
    }
}while(parseInt(nombre))

do{
    var apellido= prompt("Ingrese apellido");
    if(!parseInt(apellido)){
        persona.apellido = apellido
    }
}while(parseInt(apellido))

do{
    var edad = prompt("Ingrese edad");
    if(parseInt(edad)){
        persona.edad = edad
    }
}while(!parseInt(edad))

do{
    var profesion = prompt("ingrese profesion")
    if(!parseInt(profesion)){
        persona.profesion= profesion
    }
}while(parseInt(profesion))

document.write(persona.nombre+"-", persona.apellido+"-",persona.edad+"-", persona.profesion)

var opcion = prompt("Que desea visualizar?")
if(opcion=="nombre"){
    document.write("Nombre: "+ persona.nombre)
}
if(opcion=="apellido"){
    document.write("Apellido: "+ persona.apellido)
}
if(opcion=="edad"){
    document.write("Edad: "+ persona.edad)
}
if(opcion=="profesion"){
    document.write("Profesion: "+ persona.profesion)
}