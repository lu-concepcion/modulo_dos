var persona = new Object();
var nom;
var apell;
var ed;
var profesion;

do {
    nom = prompt("Ingrese nombre");
    if (!isNaN(parseInt(nom))) {
        alert("debe ingresar texto")
    }
} while (!isNaN(parseInt(nom)));
persona.nombre = nom;

do {
    apell = prompt("Ingrese apellido");
    if (!isNaN(parseInt(apell))) {
        alert("debe ingresar texto")
    }
} while (!isNaN(parseInt(apell)));
persona.apellido = apell;

do {
    ed = prompt("Ingrese edad");
    if (isNaN(parseInt(ed))) {
        alert("debe ingresar numeros")
    }
} while (isNaN(parseInt(ed)));
persona.edad = ed;

do {
    profesion = prompt("ingrese profesion");
    if (!isNaN(parseInt(profesion))) {
        alert("debe ingresar texto")
    }
} while (!isNaN(parseInt(profesion)));
persona.profes = profesion;


alert(persona.nombre + " " + persona.apellido + " " + persona.edad + " " + persona.profes);