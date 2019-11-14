//Escribir un algoritmo que solicite por teclado edad y nombre de una persona, para finalizar debo 
//ingresar el texto: “Salir” e indicarme el nombre de la persona de mayor edad.
//Al menos se deben ingresar 4 nombres
//Utilizar OBJETOS

var persona ={
    nombre:"",
    edad:0
}

contador=0;
var mayor=0;
var nombremayor="";

do{
    persona.nombre = prompt("Introduce un Nombre");

    if(contador > 3){
        if(persona.nombre=="Salir"){
            break;
        }
    }else{
    
        persona.edad = prompt("Introduce su Edad");
      
        if(persona.edad>mayor){
            mayor=persona.edad;
            nombremayor=persona.nombre;
        }
    }
    contador++;
}while (persona.nombre != "Salir" || persona.edad != "Salir" && contador < 4)

alert(nombremayor + " es la persona mayor con " + mayor)