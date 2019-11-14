//Escribir un algoritmo solicite la siguiente información de una persona:
//Nombre: debe aceptar solo texto
//Apellidos: debe aceptar solo texto
//Edad: debe aceptar solo número
//Profesión: debe aceptar solo texto
//Mostrar información por pantalla (a elección)
//Utilizar OBJETOS

var persona = {};
do{
persona.nombre = prompt("ingrese nombre: ")
}while(!isNaN(persona.nombre));

do{
persona.apellido = prompt("ingrese apellido: ")
}while(!isNaN(persona.apellido));

do{
persona.edad = prompt("ingrese edad: ")
}while(!Number.isInteger(parseInt(persona.edad) ));

do{
persona.profesión= prompt("ingrese Profesión: ")
}while(!isNaN(persona.profesión));

alert( persona.nombre + " " + persona.apellido + " " + persona.edad +" "+ persona.profesión);