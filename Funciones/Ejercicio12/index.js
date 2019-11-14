import {obtenerEdadPersona, esNumero} from '../funciones.js';
let arrayPersonas = [
    {
        nombre: 'Felipe',
        fechaNacimiento: new Date("1992","9","18")
    },
    {
        nombre: 'Valentina',
        fechaNacimiento: new Date("1991","11","4")
    },
    {
        nombre: 'Homero',
        fechaNacimiento: new Date("2000","1","15")
    }
];
let edadLimite = 0;
let nombres = '';

while(true) {
    edadLimite = prompt('Ingrese límite de edad');
    if (esNumero) {
        break;
    }
    alert('Error: ingrese solo números por favor');
}

let personasMayores = obtenerEdadPersona(arrayPersonas, edadLimite);

personasMayores.forEach(element => {
    nombres += element['nombre'] + '\n';
});

alert('Personas con edad mayor a la edad ingresada:\n' + nombres);


