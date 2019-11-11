// Escribir un algoritmo que solicite por teclado edad y nombre de una persona, 
//para finalizar debo ingresar el texto: “Salir” e indicarme el nombre de la persona de mayor edad.
// Al menos se deben ingresar 4 nombres
// Utilizar OBJETOS

var persona =[{
    nombre:"",
    edad:0
}]
//Ejercicio 11
var edadAuxiliar=0, nombreAuxiliar="";
var contador=0
do{
    var nombre = prompt("Introduce nombre");
    if(nombre == "Salir"){
        if(contador >3){
            break;
        }
        
    }else{
        var edad = prompt("Introduce edad");
        persona[contador].nombre = nombre;
        persona[contador].edad = edad;
        alert(persona[contador].nombre)
        contador++;
    }
    
}while(contador >=0)   
for(i=0;i<contador;i++){
    if(edadAuxiliar<persona[i].edad){
        edadAuxiliar=persona[i].edad;
        nombreAuxiliar=persona[i].nombre;
    }
}
document.write("El mayor es "+ nombreAuxiliar, edadAuxiliar)