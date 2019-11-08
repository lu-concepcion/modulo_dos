
var perNom = prompt("Ingrese el nombre de una persona");
var perApe = prompt("Ingrese su apellido");
var perEdad = prompt("Ingrese la edad de la persona");
var perPro = prompt("Ingrese la profesion de la persona");

var persona={

    nombre:perNom,
    apellido:perApe,
    edad:perEdad,
    profesion:perPro

};

persona.nombre
persona.apellido
persona.edad
persona.profesion

document.write(persona.nombre+", ", persona.apellido+", ", persona.edad+", ", persona.profesion)
