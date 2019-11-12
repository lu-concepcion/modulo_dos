import { encontrarElemento, buscarEnArray} from "../funciones.js";

let elemento = 11;
let arregloNumeros = [1,2,3,4,5,6,7,8,9,10];
let arregloColores = ['rojo','blanco','verde','azul','amarillo'];

console.log('Existe elemento: ' + (encontrarElemento(elemento, arregloNumeros)?'Sí':'No'));

let arregloPersonas = [
    {
        nombre: 'Felipe',
        edad: 27,
        sexo: 'M'
    },
    {
        nombre: 'Valentina',
        edad: 28,
        sexo: 'F'
    },
    {
        nombre: 'Homero',
        edad: 38,
        sexo: 'M'
    }
];

console.log(arregloPersonas);


