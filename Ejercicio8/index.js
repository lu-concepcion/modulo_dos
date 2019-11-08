// Escribir un algoritmo solicite la siguiente información de una persona:
// Nombre: debe aceptar solo texto
// Apellidos: debe aceptar solo texto
// Edad: debe aceptar solo número
// Profesión: debe aceptar solo texto
// Mostrar información por pantalla (a elección)
// Utilizar OBJETOS

var Persona = new Object();
do{
    Persona.nombre=prompt("Ingrese su nombre");
}while(parseInt(Persona.nombre));
do{
    Persona.apellidos=prompt("Ingrese sus apellidos");
}while(parseInt(Persona.apellidos));
do{
    Persona.edad=prompt("Ingrese su edad");
}while(isNaN(Persona.edad));
do{
    Persona.profesion=prompt("Ingrese su profesion");
}while(parseInt(Persona.profesion));

var consulta= prompt("Ingrese una opcion a ver: nombre, apellidos, edad, profesion");
document.write(Persona.consulta)