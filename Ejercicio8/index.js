

var persona = new Object();
var edadObjeto;


do{
persona.nombre =  prompt("Ingrese nombre de la persona (solo texto)");
}while(!isNaN(persona.nombre));


do{
    persona.apellidos = prompt("Ingrese apellido (solo texto)");
    }while(!isNaN(persona.apellidos));


 do{
    persona.edad = prompt("Ingrese edad (solo números)");
    }while(isNaN(parseInt(persona.edad)));

    do{
        persona.profesion = prompt("Ingrese profesion (solo texto)");
        }while(!isNaN(persona.profesion));


       

      do{  
        var menu = prompt("1.Nombre \n2.Apellidos \n3.Edad \n4.Profesion \n5.Todo");
          var repetir= false;

        switch (menu) {
            case "1":
                alert("Nombre: " + persona.nombre);
                break;

                case "2":
                alert("Apellidos: " + persona.apellidos);
                break;

                case "3":
                alert("Edad: " + persona.edad);
                break;

                case "4":
                alert("Profesion: " + persona.profesion);
                break;

                case "5":
                    alert("Nombre: " + persona.nombre + "\nApellidos: " + persona.apellidos + "\nEdad: " + persona.edad + "\nApellidos: " + persona.profesion);
                break;
        
            default:
                alert("Ingrese respuesta valida");
                 repetir = true;
        }
    }while(repetir);
        








