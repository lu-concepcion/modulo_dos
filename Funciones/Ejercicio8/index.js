import {buscarEnArray, objetoEnArray, listarPropiedades} from '../funciones.js'

let arreglo=[];
arreglo[0] = 1;
arreglo[1] = 2;
arreglo[2] = 3;
arreglo[3] = 4;
arreglo[4] = 5;

//alert(arreglo);

//alert(buscarEnArray(arreglo, "");

var Persona= new Object();
var Perro = new Object();
var Gato = new Object();


Persona.nombre= "juan";
Persona.edad = 36;
Persona.sexo = "H"

Perro.nombre= "chispita";
Perro.edad= 4;
Perro.patas=4;

Gato.nombre ="mishi";
Gato.edad= 4;
Gato.vidas=7;

let arreglo2=[Persona, Perro, Gato];




alert(objetoEnArray(arreglo2, "nombre", "chispita"));




