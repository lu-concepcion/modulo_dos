var persona = new Object();
var nom;
var apell;
var ed;
var profesion;

nom = prompt("Ingrese nombre");
if (nom != parseInt(nom)) {
    persona.nombre = nom;
} else {
    prompt("Debe ingresar texto");
}

apell = prompt("Ingrese apellido");
if (apell != parseInt(apell)) {
    persona.apellido = apell;
} else {
    prompt("Debe ingresar texto");
}

ed = prompt("Ingresar Edad");
if (ed == parseInt(ed)) {
    persona.edad = ed;
} else {
    prompt("Debe ingresar números")
}

profesión = prompt("ingrese profesion");
if (profesion != parseInt(profesion)) {
    persona.profes = profesion;
} else {
    prompt("Debe ingresar texto")
}

alert(persona.nombre + " " + persona.edad);