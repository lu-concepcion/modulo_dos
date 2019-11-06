// variable guardará lo introducido en el prompt
var calificacion = prompt("Ingresa tu calificación");

var mensaje;
if (calificacion >= 1 && calificacion <= 3){
    mensaje = "Muy bajo";
}
if (calificacion >= 4 && calificacion <= 5){
    mensaje = "Regular";
}
if (calificacion >= 6 && calificacion <= 7){
    mensaje = "Muy bueno";
}
if (calificacion >= 8 || calificacion <= 0){
    mensaje = "Calificación no corresponde";
}

// levanta una ventana
alert(mensaje)