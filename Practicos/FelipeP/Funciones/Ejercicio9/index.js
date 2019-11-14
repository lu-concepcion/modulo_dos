import { ordenaMenorMayor,ordenaMayorMenor } from '../funciones.js';

let arregloNumeros1 = [8,3,2,6,9,1,4,5,7,10];
let arregloNumeros2 = [8,3,2,6,9,1,4,5,7,10];

let ordenadoMenorMayor = [];
let ordenadoMayorMenor = [];

ordenadoMenorMayor = ordenaMenorMayor(arregloNumeros1);
ordenadoMayorMenor = ordenaMayorMenor(arregloNumeros2);

// Ordenado de menor a mayor
console.log('Ordenado de menor a mayor');
ordenadoMenorMayor.forEach(element => {
    console.log(element);
});

// Ordenado de mayor a menor
console.log('Ordenado de mayor a menor');
ordenadoMayorMenor.forEach(element => {
    console.log(element);
});

