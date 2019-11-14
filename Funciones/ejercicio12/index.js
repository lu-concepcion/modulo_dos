import { esUnNumero, cualesSonMayores } from '../funciones.js';

let fechas = [
    {
        nombre : 'Pedro',
        fechaNacimiento : new Date(1995,2,5)
    },
    {
        nombre: 'Maria',
        fechaNacimiento : new Date(1990,3,12)
    },
    {
        nombre: 'Mario',
        fechaNacimiento : new Date(1985, 5, 22)
    }
];

var paso = false;
do{
    var edad = prompt("Cual es la edad que deseas filtrar:");
    if (edad !== "" && esUnNumero(edad)) var paso = true;
    else alert("Ingresa una edad correcta!");
}while(!paso);
console.log(edad);
alert("Las personas mayores son: \n"+cualesSonMayores(fechas, edad));

