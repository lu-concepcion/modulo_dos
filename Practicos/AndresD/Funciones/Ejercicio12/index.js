import {calcularEdad} from '../funciones.js';

var persona1 ={
nombre:"juan"
}

persona1.fechaNac = new Date("1959, 10, 15");
alert(persona1.fechaNac)
alert(calcularEdad(persona1.fechaNac))