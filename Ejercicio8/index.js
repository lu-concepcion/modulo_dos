

var persona = new Object();
var edadObjeto;


do{
persona.nombre =  prompt("Ingrese nombre de la persona (solo texto)");
}while(!isNaN(persona.nombre));


do{
    persona.apellidos = prompt("Ingrese apellido (solo texto)");
    }while(!isNaN(persona.apellidos));


 do{
    persona.edad = prompt("Ingrese edad (solo números)");
    }while(isNaN(parseInt(persona.edad)));

    do{
        persona.profesion = prompt("Ingrese profesion (solo texto)");
        }while(!isNaN(persona.profesion));




        alert("Nombre: " + persona.nombre + "\nApellidos: " + persona.apellidos + "\nEdad: " + persona.edad + "\nApellidos: " + persona.profesion);







