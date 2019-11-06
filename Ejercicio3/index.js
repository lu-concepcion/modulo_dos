var Notas = prompt("Introducir notas");
if ((Notas >= 1) &&(Notas <= 3)) {
    var mensaje = "Muy Bajo";
    alert(mensaje)
}
else if ((Notas >= 4)&&(Notas <= 5)) {
    var mensaje = "Regular";
    alert(mensaje)
}
else if((Notas >= 6)&&(Notas <= 7)){
    var mensaje = "Muy bueno";
    alert(mensaje)
}