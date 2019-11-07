var nombreMayor="";
var edadMayor=0;
contador = 0;

do {

     nombre = prompt("Ingrese su nombre");
    
    

    if (nombre == "Salir") {
        if (contador>3) { 
            break
        }
    }
else{
     edad = prompt("Ingrese su edad");
     contador = contador+1;
    if (edad > edadMayor) {
        nombreMayor= nombre;
        edadMayor= edad;
    }
}
    
} while (contador<4 || nombre != "Salir");

alert("La persona de mayor edad es "+ nombreMayor)