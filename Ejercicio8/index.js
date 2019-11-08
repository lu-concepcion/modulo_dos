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

do{
    var respuesta = prompt("Ingrese opcion: 1.Nombre 2.Apellidos 3.Edad 4.Profesion 5.Todo");
    var rep = false;
    switch(respuesta){
        case "1":
            alert("Nombre : " + persona.nombre);
            break;
        case "2":
            alert("Apellido : " + persona.apellidos);
            break;
        case "3":
            alert("Edad : " + persona.edad);
            break;
        case "4":
            alert("Profesion : " + persona.profesion);
            break;
        case "5":
            alert("Nombre: " + persona.nombre + ", Apellidos: " + persona.apellidos + ", Edad: " + persona.edad
                  + ", Profesion: " + persona.profesion)

        default:
            rep = true;
            alert("Ingrese opcion valida");
    }
    
}while(rep);
