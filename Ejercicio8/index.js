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

