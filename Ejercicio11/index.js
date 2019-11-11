// Escribir un algoritmo que solicite por teclado edad y nombre de una persona, 
//para finalizar debo ingresar el texto: “Salir” e indicarme el nombre de la persona de mayor edad.
// Al menos se deben ingresar 4 nombres
// Utilizar OBJETOS

var persona ={
    nombre:"",
    edad:0
}
//Ejercicio 11
var mayor=0, nombreMayor="";
var contador=0
do{
     persona.nombre = prompt("Introduce nombre");
    if(persona.nombre == "Salir"){
        if(contador >3){
            break;
        }
        
    }else{
         persona.edad = prompt("Introduce edad");
        if(persona.edad>mayor){
            mayor = persona.edad
            nombreMayor = persona.nombre
        }
        contador++;
    }
    
}while(contador >=0)   

document.write("El mayor es "+ nombreMayor," "+ mayor)