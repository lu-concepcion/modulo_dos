// Defino las variables
const persona = new Object();

do {
    var nombre = prompt("Cual es tu nombre?");
    if (nombre !== "" || isNaN(nombre)) {
        persona.nombre = nombre;
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
        persona.apellido = apellido;
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
        persona.profession = profession;
        var pasoProfession = true;
    }
    else {
        alert ("Ingresa tu profession correctamente!");
        var pasoProfession = false;
    }
}while(!pasoProfession);

do {
    var edad = prompt("Cual es tu edad?");
    if (edad !== "" || !isNaN(edad) || edad !== 0) {
        persona.edad = edad;
        var pasoEdad = true;
    }
    else {
        alert ("Ingresa tu profession correctamente!");
        var pasoEdad = false;
    }
}while(!pasoEdad);

    alert("Tú nombre es: " +persona["nombre"] + "\nTus apellidos son: " +persona["apellido"] +
    "\nTú edad es:" +persona["edad"] + "\nTú professión es: " + persona["profession"]);