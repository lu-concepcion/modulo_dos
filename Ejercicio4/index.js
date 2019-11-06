// variable edad guardará lo introducido en el prompt

var contador = 0;
var mensaje ="";
while (lp != "Python" || contador < 4) {
    var lp = prompt("Introduce un LP");
    if(contador < 4 && lp == "Python"){
    }
    else {if(mensaje == "")mensaje = lp;
        else mensaje = mensaje + " - " + lp;
        contador++;
    }
}
// levanta una ventana con la edad ingresada
alert(mensaje)