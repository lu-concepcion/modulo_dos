//Declaro las variables
var num1 = 0;
var num2 = 1;
var num3 = 0;
var num4 = 1;
var good = false;
var resultado = "";

do {
    var numero = prompt("Ingresa el número");
    if (!isNaN(numero) && numero > 3 && numero <= 15)
        var good = true;
    else
    alert ("Ingresa una cantidad que no sea menor a 3 y mayor a 15")
}while(!good);

for (i = 3; i <= numero; i++) {
    num3=parseInt(num1+num3);
    num4 = parseInt(num4) + parseInt(num3);
    console.log(num4);
    resultado += ", " + num4.toString();
    num1 = num2;
    num2 = num3;
}
document.write("0, 1 " + resultado);
