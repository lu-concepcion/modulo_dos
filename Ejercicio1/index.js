var n1 = prompt("Ingresa un número");
var n2 = prompt("Ingresa nuevamente otro número");

if (!NaN(n1) && n1 !== "" && !NaN(n2) && n2 !== "") {
    alert(parseInt(n1)+parseInt(n2));
}
else {
alert ("No ingresastes números válidos");
}