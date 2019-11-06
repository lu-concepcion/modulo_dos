// variable edad guardará lo introducido en el prompt
var nota = prompt("Introduzca su nota");

if ((parseInt(nota) <= 3) & parseInt(nota)>0 ) {
    alert("Muy bajo")
}

else if ((parseInt(nota) <= 5)  ) {
    alert("Regular")
}

else if ((parseInt(nota) <= 7)  ) {
    alert("Muy bueno")
}

else{
alert("Nota no valida")
}