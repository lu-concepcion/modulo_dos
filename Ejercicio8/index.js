//Escribir un algoritmo solicite la siguiente información de una persona:
//Nombre: debe aceptar solo texto
//Apellidos: debe aceptar solo texto
//Edad: debe aceptar solo número
//Profesión: debe aceptar solo texto
//Mostrar información por pantalla (a elección)

//Utilizar OBJETOS

var persona= {};
var nombre= prompt("Ingrese nombre");
var apellido= prompt("Ingrese apellido");
var edad = prompt("Ingrese edad");
var profesion = prompt("ingrese profesion")



if(parseInt(nombre)){
}else{
    persona.nombre = nombre;
}
if(parseInt(apellido)){
}else{persona.apellido = apellido}
if(parseInt(edad)){
    persona.edad = edad
}
if(parseInt(profesion)){

}else{persona.profesion= profesion}
document.write(persona.nombre, persona.apellido,persona.edad, persona.profesion)
