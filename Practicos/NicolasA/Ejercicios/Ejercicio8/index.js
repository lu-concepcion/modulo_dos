var persona = {
    nombre: "",
    apellidos: "",
    edad: 0,
    profesion: ""
};

do{ //Nombre
    persona.nombre = prompt("Ingrese su nombre");
}while(parseInt(persona.nombre));

do{ //Apellidos
    var apellidoA = prompt("Primer apellido");
    var apellidoB = prompt("Segundo apellido");

    persona.apellidos = apellidoA + " " + apellidoB;
}while(parseInt(persona.apellidos));

do{ //Edad
    persona.edad = prompt("Ingrese su edad");
}while(!parseInt(persona.edad));

do{ //Profesión
    persona.profesion = prompt("Ingrese su profesión");
}while(parseInt(persona.profesion));

do{ //Información
    var informacion = prompt("Desea ver su información? (Si/No)");
}while(informacion != "Si" && informacion != "No");

if(informacion == "Si"){
    var mensaje =   "Nombre: " + persona.nombre +
                "<br> Apellidos: " + persona.apellidos +
                "<br> Edad: " + persona.edad +
                "<br> Profesión: " + persona.profesion;

    document.write(mensaje);
}
