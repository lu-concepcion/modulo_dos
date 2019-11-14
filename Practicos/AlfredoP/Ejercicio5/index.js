// Defino las variables
 var edad;
 var nombre;
 var contador = 0;
 var good = false;


do {
    var nombreInput = prompt("Cual es tu nombre?");
    if (nombreInput.toLowerCase() == "salir" && contador >= 4) {
        var good=true;
    }
    else {
        var good=false;
        contador++;
        nombre = nombreInput;
        var edadInput = prompt("Ingresa tu edad");
        if (edadInput.toLowerCase() == "salir" && contador >= 4) {
            var good=true;
        }
        else {
            var good=false;
        }
    }
}while(good);