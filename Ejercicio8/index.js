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

var respuesta = prompt("¿Que información desea ver?" +
                        "1.- Nombre" +
                        "2.- Apellidos" +
                        "3.- Edad" +
                        "4.- Profesión" );

switch(respuesta){
    case 1:
        alert(persona.nombre);
        break;
    case 2:
        alert(persona.apellidos);
        break;
    case 3:
        alert(persona.edad);
        break;
    case 4:
        alert(persona.profesion);
        break;
}