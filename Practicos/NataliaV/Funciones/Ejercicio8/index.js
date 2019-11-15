import{numeroaBuscar} from './funciones.js'
let numero =[1,2,3,4,5,6,7,8,9,10];
let n =parseInt(prompt("Ingrese un numero: "))
let p;
let arregloPersona=[{
    id:1,
    nombre:'Natalia',
    apellido:'Varela',
    edad: '23',
    sexo: 'femenino'},
 
    {
    id:2,
    nombre:'Antonia',
    apellido:'Yañez',
    edad: 2,
    sexo: 'femenino'},

    {
    id:3,
    nombre:'Marco',
    apellido:'Yañez',
    edad: 30,
    sexo: 'Maculino'}

];

for (let i = 0; i < arregloPersona.length; i++) {
    const element = arregloPersona;
    console.log(arregloPersona[i]['nombre']);
    
}

if(!numeroaBuscar(numero,n)){
    alert("no se encuentra "+n)

 
}