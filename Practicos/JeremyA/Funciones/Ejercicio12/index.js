// Escriba un programa que me muestre, de un listado de personas, solo
// a aquellas que sean mayores a X edad, el objeto no puede tener como
// propiedad la edad, solo la fecha de nacimiento.


// // new Date(año, mes, dia)
// const fecha = new Date("1990","2","5");

// fecha.getDay() // retorna el número del día
// fecha.getMonth() // retorna el número del mes
// fecha.getFullYear() // retorna el año

import { obtenerEdad } from "../funciones.js"

let dia=0,mes=0,agno=0;
do{
    dia = prompt("ingresa dia de nacimiento");
}while(dia<0 && dia>31)


do{
    mes = prompt("ingresa mes de nacimiento");
}while(mes<0 && mes>12)

do{
    agno = prompt("ingresa año de nacimiento");
}while(agno<1930)


const fecha = new Date(agno,mes,dia);

obtenerEdad(edad);