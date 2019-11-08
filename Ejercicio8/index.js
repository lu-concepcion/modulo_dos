var persona = {};
var nombre = prompt("Ingrese nombre: ");
var apellido=prompt("Ingrese Apellido: ");
var edad = parseInt(prompt("Ingrese edad:"));
var profesion = prompt("Ingrese profesion: ");

persona.nombre = nombre;
persona.apellido= apellido;
persona.edad = edad;
persona.profesion=profesion;

if(parseInt(nombre)== false){
    alert("Es Letra");
     alert(persona.nombre);
}else{
   alert("Es Numero");
}
if(parseInt(apellido)== false){
    alert("Es Letra");
     persona.apellido;
}else{
   alert("Es Numero");
}
if(parseInt(edad)== true){
    alert("Es Numero");
     persona.apellido;
}else{
   alert("Es Letra");
}