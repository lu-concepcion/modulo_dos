import {calcularEdad} from '../funciones.js';

var persona1 ={
nombre:"juan"
}

persona1.fechaNac = new Date(1995, 8, 21);
alert(calcularEdad(persona1.fechaNac))