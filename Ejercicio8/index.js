let nombre = ""
let apellido = ""
let edad = ""
let profesion = ""


while(true){
    nombre = prompt('Ingresa nombre');
    if (!nombre.match(/[a-zA-Z]/) || nombre === '') {
        alert('Error: Ingrese solo letras y no dejes campo vacío');
    } else {
        break;
    }
}
while(true){
    apellido = prompt('Ingresa apellido');
    if (!nombre.match(/[a-zA-Z]/) || apellido === '') {
        alert('Error: Ingrese solo letras y no dejes campo vacío');
    } else {
        break;
    }
}
while(true){
    edad = prompt('Ingresa edad');
    if (!/^([0-9])*$/.test(edad) || edad === '') {
        alert('Error: Ingrese solo números y no dejes campo vacío');
    } else {
        break;
    }
}
while(true){
    profesion = prompt('Ingresa profesion');
    if (!nombre.match(/[a-zA-Z]/) || profesion === '') {
        alert('Error: Ingrese solo letars y no dejes campo vacío');
    } else {
        break;
    }
}



var persona = new Object();

persona.nombre = nombre;
persona.apellido = apellido;
persona.edad = edad;
persona.profesion = profesion;

document.write(persona.nombre + ', ');
document.write(persona.apellido + ', ');
document.write(persona.edad + ', ');
document.write(persona.profesion + ', ');

