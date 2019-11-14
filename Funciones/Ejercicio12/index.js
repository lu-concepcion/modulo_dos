// Escriba un programa que me muestre, de un listado de personas, solo
// a aquellas que sean mayores a X edad, el objeto no puede tener como
// propiedad la edad, solo la fecha de nacimiento.


// // new Date(año, mes, dia)
// const fecha = new Date("1990","2","5");

// fecha.getDay() // retorna el número del día
// fecha.getMonth() // retorna el número del mes
// fecha.getFullYear() // retorna el año

import{ edadPersonas  } from '../funciones.js';  // importar sin nombre {} para que despues sugiera

let personas=[
    {
    nombre: "Victoria",
    fechaNacimiento: "01/29/1996" 
    }, 
    {
        nombre: "Andrea",
        fechaNacimiento: "11/29/1990" 
    },
    {
        nombre: "Josefa",
        fechaNacimiento: "12/29/2002" 
        }
]

const edad=23;//prompt("Edad a comparar");

const d=new Date();
console.log(d.getFullYear())









alert(edadPersonas(personas, edad))