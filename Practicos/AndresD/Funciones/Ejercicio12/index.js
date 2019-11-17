import {mayoresDeEdad} from '../funciones.js';

const persona1 ={
nombre:"juan",
fechaNac : new Date("1959/ 10/ 15")
}
const persona2 ={
nombre:"benito",
fechaNac : new Date("1980/ 04/ 10")
}
const persona3 ={
nombre:"menor",
fechaNac : new Date("2005/ 12/ 17")
}
const persona4 ={
nombre:"andy",
fechaNac : new Date("1995/ 08/ 21")
}

let personas =[persona1, persona2, persona3, persona4];

let mayores = (mayoresDeEdad(personas));
let lista ="Lista de Mayores: \n";
for (let i = 0; i < mayores.length; i++) {
    for (let j = 0; j < Object.keys(mayores[i]).length; j++) {
       lista = `${lista} ${Object.keys(mayores[i])[j]}: ${Object.values(mayores[i])[j]}\n`
    }
}
alert(lista);
