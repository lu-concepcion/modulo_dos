// Escribir un algoritmo solicite la siguiente información de una persona:
// Nombre: debe aceptar solo texto
// Apellidos: debe aceptar solo texto
// Edad: debe aceptar solo número
// Profesión: debe aceptar solo texto
// Mostrar información por pantalla (a elección)

// Utilizar OBJETOS

var informacionPersona ={};

informacionPersona.Nombre = prompt("Ingrese nombre");


while( isNaN(informacionPersona.Nombre) == false){
    informacionPersona.Nombre = prompt("Ingrese nombre");
}



informacionPersona.Apellidos = prompt("Ingrese apeliidos");

while(isNaN( informacionPersona.Apellidos) == false){
    informacionPersona.Apellidos = prompt("Ingrese apellidos");
}

informacionPersona.Edad = prompt("Ingrese edad");
while(isNaN( informacionPersona.Edad) == true ){
    informacionPersona.Edad = prompt("Ingrese edad");
}


informacionPersona.Profesion = prompt("Ingrese profesion");
while(isNaN (informacionPersona.Profesion) == false ){
    informacionPersona.Profesion = prompt("Ingrese profesion");
}

var verInformacion ="";

verInformacion= prompt("Desea ver la informacion en pantalla? Ingrese Si o No");

if ( verInformacion == "Si"){
    alert("Nombre: " + informacionPersona.Nombre + " Apellido: " + informacionPersona.Apellidos + " Edad: " + informacionPersona.Edad + " Profesion: " + informacionPersona.Profesion);
}
















