import{  mayoresEdad} from '../funciones.js'

let listadoPersonas=[

   {
       nombre: "leo",
       fechaNacimiento: new Date("1995","12","28")
   },
   {
       nombre: "juan",
       fechaNacimiento: new Date("2008","1","1")
   },
   {
       nombre: "catalina",
       fechaNacimiento: new Date("1998","11","19")
   },
   {
       nombre: "ruth",
       fechaNacimiento: new Date("1966","11","25")
   }

];

let mayores=[];

mayores =mayoresEdad(listadoPersonas);

alert((JSON.stringify(mayores)));


