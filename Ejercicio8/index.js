/*Escribir un algoritmo solicite la siguiente información de una persona:
Nombre: debe aceptar solo texto
Apellidos: debe aceptar solo texto
Edad: debe aceptar solo número
Profesión: debe aceptar solo texto
Mostrar información por pantalla (a elección)

Utilizar OBJETOS*/

var persona = {};
var nombre ;
var apellido;
var edad;
var profesion;
var r=true;
do{
   nombre = prompt("Ingrese nombre: ");
if(isNaN(nombre)== true){
     persona.nombre=nombre;
     break;
}else{
   alert("Es Numero ingrese nuevamente");
   r=true;
}
}while(r==true)

do{
    apellido=prompt("Ingrese Apellido: ");
 if(isNaN(apellido)== true){
      persona.apellido=apellido;
      break;
 }else{
    alert("Es Numero ingrese nuevamente");
    r=true;
 }
 }while(r==true)



 do{
    edad = parseInt(prompt("Ingrese edad:"));
 if(isNaN(edad)== false){
      persona.edad=edad;
      break;
 }else{
    alert("Es Letra ingrese nuevamente");
    r=true;
 }
 }while(r==true)

 do{
    profesion = prompt("Ingrese profesion: ");
 if(isNaN(profesion)== true){
      persona.profesion=profesion;
      break;
 }else{
    alert("Es Numero ingrese nuevamente");
    r=true;
 }
 }while(r==true)

 document.write(" Nombre: \n"+persona.nombre+" Apellido: \n "+persona.apellido+"  Edad: \n "+persona.edad+" Profesion: \n "+persona.profesion);


