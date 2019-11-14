// variable n1 guardará lo introducido en el prompt
var n1 = prompt("ingrese su nota");

var resultado = parseInt(n1)
if (resultado >= 1 && resultado <=3) {
    alert("Muy Bajo")
}
if (resultado >= 4 && resultado <= 5) {
    alert("Regular")
}
if (resultado >= 6 && resultado <= 7) {
    alert("Muy bueno")
}


