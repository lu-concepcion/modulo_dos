import { verficarLimiteEdad } from '../funciones.js';

var arregloPersona =[{
    nombre: "Hernan",
    fechaNacimiento: new Date("1990", "2", "5")
},{
    nombre: "Jorge",
    fechaNacimiento: new Date("2001", "1", "22")
},{
    nombre: "Juan",
    fechaNacimiento: new Date("2015", "11", "14")
},
];

var pedirEdadLimite = prompt("Ingrese la edad limite")

alert(verficarLimiteEdad(pedirEdadLimite, arregloPersona, "fechaNacimiento"))

