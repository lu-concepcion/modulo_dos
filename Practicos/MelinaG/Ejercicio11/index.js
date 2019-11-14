//Escribir un algoritmo que solicite por teclado edad y nombre de una persona, para finalizar debo ingresar el texto: “Salir” 
//e indicarme el nombre de la persona de mayor edad.
//Al menos se deben ingresar 4 nombres
//Utilizar OBJETOS

var persona = {
    nombreM: "",
    edadM: 0
}
var contador = 0;
do {
var nombre = prompt("ingrese nombre:");

if (nombre == "salir" ) {
   if (contador > 3) {
     break;
   }   
}
else {
contador++;    
var edad = prompt("ingrese edad");
if (edad > persona.edadM ) {
    persona.edadM = edad;
    persona.nombreM = nombre;
}
}
}while(nombre != "salir" || contador < 4 );
document.write("El mas viejo es " + persona.nombreM);

