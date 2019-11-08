var persona = Object();

do{
    persona.nombre = prompt("Ingrese nombre: ");
}while(isNaN(persona.nombre) == false)

do{
    persona.apellidos = prompt("Ingrese apellidos: ");
}while(isNaN(persona.apellidos) == false)

do{
    persona.edad = prompt("Ingrese edad: ");
}while(isNaN(parseInt(persona.edad)))

do{
    persona.profesion = prompt("Ingrese profesion: ");
}while(isNaN(persona.profesion) == false)

alert(persona.nombre + " " + persona.apellidos + " " + persona.edad + " " + persona.profesion);