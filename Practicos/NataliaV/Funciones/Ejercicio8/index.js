import{numeroaBuscar} from './funciones.js'
let numero =[1,2,3,4,5,6,7,8,9,10];
let n =parseInt(prompt("Ingrese un numero: "))
let p;
let arregloPersona={
    nombre:'Natalia',
    apellido:'Varela',
    edad: 23,
    sexo: 'femenino',
 
    nombre:'Antonia',
    apellido:'Yañez',
    edad: 2,
    sexo: 'femenino',

    nombre:'Marco',
    apellido:'Yañez',
    edad: 23,
    sexo: 'Maculino'

};

if(!numeroaBuscar(numero,n)){
    alert("no se encuentra "+n)

 
}