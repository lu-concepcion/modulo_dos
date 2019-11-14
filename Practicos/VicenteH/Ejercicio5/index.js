var nombrefinal;
var edadfinal =0;
var nombre;
var edad;
var corriendo = 1;
var contador = 0;
do {
    nombre = prompt("Ingresar nombre");
    if ((nombre == "Salir")&&(contador >= 4))break;
    if ((nombre == "Salir")&&(contador < 4))continue;
    edad = prompt("Ingresar edad");
    contador++;
    if (edad > edadfinal) {
        edadfinal = edad;
        nombrefinal = nombre;
    }
    texto = nombrefinal + " " + edadfinal;
    
} while (corriendo);
alert(texto)