// Escribir un algoritmo solicite la siguiente información de una persona:
// Nombre: debe aceptar solo texto
// Apellidos: debe aceptar solo texto
// Edad: debe aceptar solo número
// Profesión: debe aceptar solo texto
// Mostrar información por pantalla (a elección)

// Utilizar OBJETOS

var informacionPersona ={};

informacionPersona.Nombre = prompt("Ingrese nombre");


while( isNaN(informacionPersona.Nombre) == false){
    informacionPersona.Nombre = prompt("Ingrese nombre");
}



informacionPersona.Apellidos = prompt("Ingrese apeliidos");

while(isNaN( informacionPersona.Apellidos) == false){
    informacionPersona.Apellidos = prompt("Ingrese apellidos");
}

informacionPersona.Edad = prompt("Ingrese edad");
while(isNaN( informacionPersona.Edad) == true ){
    informacionPersona.Edad = prompt("Ingrese edad");
}


informacionPersona.Profesion = prompt("Ingrese profesion");
while(isNaN (informacionPersona.Profesion) == false ){
    informacionPersona.Profesion = prompt("Ingrese profesion");
}

var verInformacion ="";

verInformacion= prompt("Desea ver la informacion en pantalla? Ingrese Si o No");

if ( verInformacion == "Si"){
    alert("Nombre: " + informacionPersona.Nombre + " Apellido: " + informacionPersona.Apellidos + " Edad: " + informacionPersona.Edad + " Profesion: " + informacionPersona.Profesion);
}




















// // concatenar texto

// var texto1 = texto1 + " - " + texto2;
// var textoConcatenado = `${nombre} ${apellido}`;

// // repetir logica hasta que condicion se cumpla
// contador = 0;





// //declaracion de objetos

// var objeto = { 
//     id: 1,
//     nombre: "Hernán"
//   }
  
//   //acceso a informacion de objetos
  
//   var objetoId = objeto.id;
//   var objetoNombre = objeto.nombre;
//   // la variable objetoId tomaria el valor de 1
//   // la variable objetoNombre tomaria el valor de  Hernán
  
//   // array de objetos
//   var listaObjetos = [
//     {
//       id: 1,
//       valor: "uno"
//     },
//     {
//       id: 2,
//       valor: "dos"
//     }
//   ];