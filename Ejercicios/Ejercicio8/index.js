edad = 0;
nombre = "";
apellido = "";
profesion = "";

var persona = new Object();

do {
    var edad = prompt("Ingrese una edad");
} while (Number.isNaN(parseInt(edad)));
persona.edad = edad;

do {
    var nombre = prompt("Ingrese sus nombres");
} while (Number.isNaN(parseInt(nombre)) == false);
persona.nombre = nombre;

do {
    var apellido = prompt("Ingrese sus apellidos");
} while (Number.isNaN(parseInt(apellido)) == false);
persona.apellido = apellido
do {
    var profesion = prompt("Ingrese su profesion");
} while (Number.isNaN(parseInt(profesion)) == false);
persona.profesion = profesion

var consultar_opcion = prompt("¿Que deseas ver?" + "\n1.- Nombre" + "\n2.- Apellido " + "\n3.- Edad" + "\n4.- Profesion" + "\n5.-Todo");
if (consultar_opcion == 1) {
    alert(persona.nombre);
} else {
    if (consultar_opcion == 2) {
        alert(persona.apellido);
    } else {
        if (consultar_opcion == 3) {
            alert(persona.edad)
        } else {
            if (consultar_opcion == 4) {
                alert(persona.profesion)
            } else {
                alert("Nombre: " + persona.nombre + "\nApellido: " + persona.apellido + "\nEdad: " + persona.edad + "\nProfesion: " + persona.profesion)
            }
        }
    }
}