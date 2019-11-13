import { buscarElemento, buscarEnArray } from '../funciones.js';
var texto = prompt("Ingresa una busqueda:");
if (buscarElemento(texto))
alert("Si se encuentra tu busqueda!");
else
alert("No se encuentra tu busqueda");

const animales =  [
    {
    'nombre': 'firulay',
    'sexo' : 'm',
    'especie' : 'perro',
    'edad' : 2,
    'dueno' : 'alfredo'
    },
    {
        'nombre': 'maria',
        'sexo' : 'f',
        'especie' : 'gato',
        'edad' : 10,
        'dueno' : 'pedro'
    },
    {
        'nombre': 'sacha',
        'sexo' : 'f',
        'especie' : 'tortuga',
        'edad' : 5,
        'dueno' : 'alfredo'  
    }
];

console.log(buscarEnArray(animales,'especie','Gato'));
