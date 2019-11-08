var persona = new Object ();

var name;
var age; 
var apellido;
var job;


name = prompt("Ingrese nombre");

do {
    if (name != parseInt(name)) {
        persona.nombre = name
    } else prompt ("Vuelva a ingresar su nombre");
    
} while (name == parseInt(name));



apellido = prompt("ingrese sus apellidos");
if (apellido != parseInt(apellido)) {
    persona.apellidos = apellido
} else prompt ("vuelva a ingresar sus apellidos");


age = prompt ( "ingrese su edad"); 
if (age != isNaN(age)) {
    persona.edad = age
} else prompt ("Vuelva a ingresar su edad");

job = prompt("Ingrese su profesión")
if (job != parseInt(job)) {
    persona.profesion = job
} else prompt ("vuelva a ingresar su profesión")

alert(name +"-" + apellido + "-" + age + "-" + job )