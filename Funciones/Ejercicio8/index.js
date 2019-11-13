import { encontrarElemento, buscarEnArray} from "../funciones.js";

let elemento = 11;
let arregloNumeros = [1,2,3,4,5,6,7,8,9,10];
let arregloColores = ['rojo','blanco','verde','azul','amarillo'];

console.log('Existe elemento: ' + (encontrarElemento(elemento, arregloNumeros)?'Sí':'No'));

let arregloPersonas = [
    {
        id: 1,
        nombre: 'Felipe',
        edad: 27,
        sexo: 'M'
    },
    {
        id: 2,
        nombre: 'Valentina',
        edad: 28,
        sexo: 'F'
    },
    {
        id: 3,
        nombre: 'Homero',
        edad: 38,
        sexo: 'M'
    }
];

console.log(buscarEnArray(arregloPersonas, 'id', '3'));


// console.log(buscarEnArray(arregloPersonas, edad, 27));


