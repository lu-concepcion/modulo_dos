do {
    var secuencia = prompt("Ingresar el largo de la secuencia")    
} while ((parseInt(secuencia) < 3)&&(parseInt(secuencia) > 15));
var num1 = 0;
var num2 = 1;
var num3 = 0;
var fibonacci = "0, 1";
for (var i = 2; i < secuencia; i++) {
    num3 = num1 + num2;
    num1 = num2;
    num2 = num3;
    fibonacci = fibonacci + ", " + num3;
}
alert(fibonacci)
