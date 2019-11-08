// Escribir un algoritmo que solicite por teclado edad y nombre de una persona, para finalizar 
//debo ingresar el texto: “Salir” e indicarme el nombre de la persona de mayor edad.

// Al menos se deben ingresar 4 nombres

// Utilizar OBJETOS

var informacion=[]:
var contador=0;
var informacionPersona={};

var personaMayor;
var EdadMayor;

do{
    informacionPersona.Nombre=prompt("Ingrese nombre")
    if (informacionPersona.Nombre != "Salir"){
        informacion[contadaor]=informacionPersona;
    }


}while (contador <4 || informacionPersona.Nombre!="Salir")