import {buscarEnArray, objetoEnArray} from '../funciones.js'

let arreglo=[];
arreglo[0] = "hola";
arreglo[1] = "wena";
arreglo[2] = "choro";
arreglo[3] = 4;
arreglo[4] = 5;

//alert(arreglo);

//alert(buscarEnArray(arreglo, "");

var Persona= new Object();
var Perro = new Object();
var Gato = new Object();


Persona.nombre= "juan";
Persona.edad = 36;

Perro.nombre= "chispita";
Perro.edad= 4;

Gato.nombre ="mishi";
Gato.edad= 4;

let arreglo2=[Persona, Perro, Gato];

//alert(Object.keys(arreglo2[0])[1]);

objetoEnArray(arreglo2, "edad", 4)



