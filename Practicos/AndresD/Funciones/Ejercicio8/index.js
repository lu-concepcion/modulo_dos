import {buscarEnArray, objetoEnArray, listarPropiedades, filtrarEnArray} from '../funciones.js'

let arreglo=[];
arreglo[0] = 1;
arreglo[1] = 2;
arreglo[2] = 3;
arreglo[3] = 4;
arreglo[4] = 5;


//buscar elemento en array
//alert(buscarEnArray(arreglo, 5);

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





const propiedad = prompt("ingrese propiead a buscar");
const valor = prompt("Ingrese valor de propiedad")
// Buscar un objeto en array
//alert(listarPropiedades(objetoEnArray(arreglo2, propiedad, valor)));

// Filtrar objetos de array
for (let i = 0; i < filtrarEnArray(arreglo2, propiedad,valor).length; i++) {
    alert(listarPropiedades(filtrarEnArray(arreglo2, propiedad,valor)[i]));
}