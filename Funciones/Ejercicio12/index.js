import {obtenerEdadPersona} from '../funciones.js';
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

let edadLimite = 27;

let personasMayores = obtenerEdadPersona(arrayPersonas, edadLimite);

personasMayores.forEach(element => {
    console.log(element);
});

