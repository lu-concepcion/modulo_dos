import { ordenaMayorMenor } from '../funciones.js';

let arregloNumeros = [8,3,2,6,9,1,4,5,7,10];

let ordenadoManoMayor = [];

ordenadoManoMayor = ordenaMayorMenor(arregloNumeros); 
ordenadoManoMayor.forEach(element => {
    console.log(element);
});

