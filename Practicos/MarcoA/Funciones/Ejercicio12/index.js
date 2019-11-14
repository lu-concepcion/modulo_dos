import { verficarLimiteEdad, verificarNumero, verificarNumeros } from '../funciones.js';

var arregloPersona = [{
    nombre: "Hernan",
    fechaNacimiento: new Date("1990", "2", "5")
}, {
    nombre: "Jorge",
    fechaNacimiento: new Date("2001", "1", "22")
}, {
    nombre: "Juan",
    fechaNacimiento: new Date("2015", "11", "14")
},
];

let nombres = "";
do{
var pedirEdadLimite = prompt("Ingrese la edad limite")
}while(verificarNumeros(pedirEdadLimite))
let arregloNuevo = verficarLimiteEdad(pedirEdadLimite, arregloPersona);

arregloNuevo.forEach(elements => {
    nombres = elements['nombre'] + "\n" + nombres;
});
if (nombres !== "") {
    alert(nombres)
} else {
    alert("No hay personas mayores que esa edad")
}