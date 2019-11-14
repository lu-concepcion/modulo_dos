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
    Profesion:"",
};

do{
    persona.Nombre=prompt("Ingrese su Nombre");
}while(parseInt(persona.Nombre));

do{
    persona.Apellidos=prompt("Ingrese su Apellido");
}while(parseInt(persona.Apellidos));

do{
    persona.Edad=prompt("Ingrese su Edad");
}while(!parseInt(persona.Edad));

do{
    persona.Profesion=prompt("Ingrese su Profesión");
}while(parseInt(persona.Profesion));

var res =   "Nombre: " + persona.Nombre +
                "<br> Apellidos: " + persona.Apellidos +
                "<br> Edad: " + persona.Edad +
                "<br> Profesión: " + persona.Profesion;

    document.write(res);