var Persona = new Object();
Persona.Nombre;
Persona.Apellidos;
Persona.Edad;
Persona.Profesion;
do {
    Persona.Nombre = prompt("Ingrese un Nombre")
} while (isNaN(Persona.Nombre) == false);
do {
    Persona.Apellidos = prompt("Ingrese Apellidos")
} while (isNaN(Persona.Apellidos) == false);
do {
    Persona.Edad = prompt("Ingrese una Edad")
} while (parseInt(Persona.Edad) == false);
do {
    Persona.Profesion = prompt("Ingrese una Profesion")
} while (isNaN(Persona.Profesion) == false);
var consulta;
switch (consulta = prompt("Que desea revisar?")) {
    case "Nombre":
        document.write(Persona.Nombre)
        break;
    case "Edad":
        document.write(Persona.Edad)
        break;
    case "Apellidos":
        document.write(Persona.Apellidos)
        break;
    case "Profesion":
        document.write(Persona.Profesion)
        break;

    default:
        break;
}