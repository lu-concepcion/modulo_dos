// Escriba un programa que me muestre, de un listado de personas, solo
// a aquellas que sean mayores a X edad, el objeto no puede tener como
// propiedad la edad, solo la fecha de nacimiento.


// // new Date(año, mes, dia)
// const fecha = new Date("1990","2","5");

// fecha.getDay() // retorna el número del día
// fecha.getMonth() // retorna el número del mes
// fecha.getFullYear() // retorna el año

import { calculaEdad } from '../funciones.js'
const persona =[{nombre:"jorge",fechaNacimiento:("1996","12","16")},{nombre:"mathias",fechaNacimiento:("1992","12","16")},
{nombre:"jeremy",fechaNacimiento:("1998","12","14")},{nombre:"maximiliano",fechaNacimiento:("1995","12","16")}]
const fecha = new Date("1993","12","16")
alert(calculaEdad(fecha))