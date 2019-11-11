/*Escribir un algoritmo que solicite por teclado edad y nombre de una persona,
 para finalizar debo ingresar el texto: “Salir” e indicarme el nombre de la 
 persona de mayor edad.

Al menos se deben ingresar 4 nombres

Utilizar OBJETOS*/
var persona= {};
var edad;
var nombre ;
var contador=0;
var r=true;
edad = persona.edad;
nombre = persona.nombre;

do{
   
    persona.edad = parseInt(prompt("Ingrese Edad: "));
    persona.nombre = prompt("Ingrese Nombre: ");
    contador++;
    document.write("",contador);
    
    if(contador==4 ){
        r=true;
        break;

     }
} while(r==true);
    
  



