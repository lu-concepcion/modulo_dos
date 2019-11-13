import { encontrarElemento, buscarEnArray, filtrarEnArray} from "../funciones.js";

let elemento = 11;
let arregloNumeros = [1,2,3,4,5,6,7,8,9,10];
let arregloColores = ['rojo','blanco','verde','azul','amarillo'];
let objetos = [];

// Mostrar función 1
console.log('Función 1');
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
        edad: 27,
        sexo: 'F'
    },
    {
        id: 3,
        nombre: 'Homero',
        edad: 38,
        sexo: 'M'
    }
];

// Mostrar función 2
console.log('Función 2');
console.log(buscarEnArray(arregloPersonas, 'edad', '28'));

for (let i = 0; i < arregloPersonas.length; i++) {
    if (arregloPersonas[i]['nombre'] == 'Felipe') {
        console.log('Lo encontré');
    }
    
}

forEach (item in arregloPersonas) {
    if (item['nombre'] == 'Felipe') {
        console.log('Lo encontre en foreach');
    }
}

// Mostrar función 3
console.log('Función 3');
objetos = filtrarEnArray(arregloPersonas, 'edad', '27');
objetos.forEach(element => {
    console.log(element);
});







// console.log(buscarEnArray(arregloPersonas, edad, 27));


