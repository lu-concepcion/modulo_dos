var persona = new Object ();

var name;
var age; 
var apellido;

nombre = prompt("Ingrese nombre");
if (name != parseInt(name)) {
    persona.nombre = name
} else prompt ("Vuelva a ingresar su nombre");
alert(name)

apellido = prompt("ingrese sus apellidos");
if (apellido != parseInt(apellido)) {
    persona.apellidos = apellido
} else prompt ("vuelva a ingresar sus apellidos");
alert(apellido)

age = prompt ( "ingrese su edad"); 
if (age = parseInt(age)) {
    persona.edad = age
} else prompt ("Vuelva a ingresar su edad");
alert(age);