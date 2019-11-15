// Escriba un programa que me muestre, de un listado de personas, solo
// a aquellas que sean mayores a X edad, el objeto no puede tener como
// propiedad la edad, solo la fecha de nacimiento.
// // new Date(año, mes, dia)
// const fecha = new Date("1990","2","5");

// fecha.getDay() // retorna el número del día
// fecha.getMonth() // retorna el número del mes
// fecha.getFullYear() // retorna el año

import{ calculaEdad } from '../funciones.js';

let personas = [{nombre:"mathias", fechaNacimiento:"1997/06/27"},{nombre:"jorge", fechaNacimiento:"1998/09/15"},{nombre:"jeremy", fechaNacimiento:"1996/04/05"}]

const fecha = new Date("1997","2","5");
console.log(fecha)
calculaEdad(fecha)