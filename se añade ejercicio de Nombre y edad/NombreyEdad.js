var contador = 0;
var textoN = "";
var nombre;
var textoE= "";
var edad;
var imprimir;

while (contador < 4 || nombre !="salir") {
     nombre = prompt("ingresar nombre");
     edad = prompt("ingresar edad");
    if (textoN == "") {
        textoN = nombre;
    } else {
        textoN = textoN + " " + nombre;
    }
    if (nombre == "salir") {
        break
    }
    if (textoE == "") {
        textoE = edad;
    } else {
        textoE = textoE + " " + edad;
    }
    contador++;
    imprimir = textoN + "_"+ textoE;
}

alert("Datos:"+imprimir);