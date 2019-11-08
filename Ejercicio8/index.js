let nombre = ""
let apellido = ""
let edad = ""
let profesion = ""

nombre = prompt('Ingresa nombre');
apellido = prompt('Ingresa apellido');
edad = prompt('Ingresa edad');
profesion = prompt('Ingresa profesión');

var persona = new Object();

persona.nombre = nombre;
persona.apellido = apellido;
persona.edad = edad;
persona.profesion = profesion;

document.write(persona.nombre + ', ');
document.write(persona.apellido + ', ');
document.write(persona.edad + ', ');
document.write(persona.profesion + ', ');

