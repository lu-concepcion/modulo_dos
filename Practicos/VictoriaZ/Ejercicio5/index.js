var personaMayorEdad ="";
var contador =0;
var edadMayor =0;
var personaMayor ="";

do{
    var nombrePersona = prompt("Igrese nombre");
    if (nombrePersona!="Salir"){
        contador++;
        var edadPersona = prompt("Ingrese edad");
        if (parseInt(edadPersona) > parseInt(edadMayor) ){
            personaMayor = nombrePersona; 
            edadMayor= edadPersona;
        }
        // } else if (parseInt(edadPersona)=parseInt(edadMayor)){
        //     personaMayor= personaMayor + "-"+ nombrePersona;  
        // }
    }
} while ( (contador<4)||(nombrePersona!="Salir") );

alert(personaMayor + "es la persona con mayor edad"); 
