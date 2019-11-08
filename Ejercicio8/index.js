// Defino las variables
const persona = new Object();

do {
    var nombre = prompt("Cual es tu Nombre?");
    if (nombre !== "" || isNaN(nombre)) {
        persona.Nombre = nombre;
         var pasoNombre = true;
    }
    else {
        alert("Ingresa tu nombre correctamente!");
        var pasoNombre = false;
    }
}while(!pasoNombre);

do {
    var apellido = prompt("Cuales son tus apellidos?");
    if (apellido !== "" || isNaN(apellido)) {
        persona.Apellido = apellido;
         var pasoApellido = true;
    }
    else {
        alert ("Ingresa tu apellido correctamente!");
        var pasoApellido = false;
    }
}while(!pasoApellido);

do {
    var profession = prompt("Cual es tu profession?");
    if (profession !== "" || isNaN(profession) ) {
        persona.Profession = profession;
        var pasoProfession = true;
    }
    else {
        alert ("Ingresa tu profession correctamente!");
        var pasoProfession = false;
    }
}while(!pasoProfession);

do {
    var edad = prompt("Cual es tu edad?");
    if (edad !== "" || !isNaN(profession) || edad !== 0) {
        persona.Edad = edad;
        var pasoEdad = true;
    }
    else {
        alert ("Ingresa tu profession correctamente!");
        var pasoEdad = false;
    }
}while(!pasoEdad);

    //alert("Tu nombre es: " +persona[Nombre] + "\nTu apellido es: " +persona[Apellido]);
    console.log(persona["Nombre"]);