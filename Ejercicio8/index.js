//Escribir un algoritmo solicite la siguiente información de una persona:
//Nombre: debe aceptar solo texto
//Apellidos: debe aceptar solo texto
//Edad: debe aceptar solo número
//Profesión: debe aceptar solo texto
//Mostrar información por pantalla (a elección)
//Utilizar OBJETO

var persona = { 
    Nombre:"",
    Apellidos:"",
    Edad: 0,
    Profesion:""
};

do{
persona.Nombre=prompt("Ingrese su Nombre");
}while(parseInt(persona.Nombre));

alert(persona.Nombre);

persona.Apellidos=prompt("Ingrese su Apeliido");

persona.Edad=prompt("Ingrese su Edad");

persona.Profesion=prompt("Ingrese su Profesión");

//probando validaciones

