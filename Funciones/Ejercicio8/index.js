import{verificarTexto, buscarEnArray} from'../funciones.js';
/*
//funcion 1
let encontrarElemento = prompt("ingrese elemento a encontrar");
alert(verificarTexto(encontrarElemento));
*/

//funcion 2
let arrayPersonas = [
    {
        id: 1,
        nombre: "Maximiliano",
        edad: "26"
    },
    {
        id: 2,
        nombre: "Camila",
        edad: "25"
    },
    {
        id: 3,
        nombre: "Cecilia",
        edad: 45
    },
    {
        id: 4,
        nombre: "Rodrigo",
        edad: 38
    }
]

let text = prompt("ingresar palabra a buscar");
let valor =prompt("ingresar valor");

alert(buscarEnArray(arrayPersonas, text, valor));