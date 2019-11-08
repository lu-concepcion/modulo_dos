

var persona = new Object();
var edadObjeto;


do{
persona.nombre =  prompt("Ingrese nombre de la persona (solo texto)");
}while(isNaN(persona.nombre)==false)

//persona.apellidos = prompt("Ingrese edad");

 persona.edad = prompt("Ingrese edad");

//persona.profesion = prompt("Ingrese edad");



if ( isNaN(persona.edad) == false) {
    alert(persona.edad);

}




