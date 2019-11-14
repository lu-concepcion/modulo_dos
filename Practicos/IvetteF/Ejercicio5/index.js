var nombre = [];
var edad = []; 

 for(var i = 0; i<4; i++)
 {
    nombre[i] = prompt("Ingrese su nombre");
    edad[i] = prompt("Ingrese su edad");
 }
 
 var salir = prompt("Escriba Salir para finalizar");

 if(salir == "Salir")

    for(var j = 0; j<4; j++)
    {
        if (edad[j]<edad[j+1])

            var salida = nombre[j+1];
    }
    alert(salida)
 