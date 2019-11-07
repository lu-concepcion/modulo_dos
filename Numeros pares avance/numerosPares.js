var contador = 0;
var texto;
var num = [];
var suma = 0;
var resta = 0;
var dividir = 0;
var multiplicar = 0;

while (contador < 5 ) {
    texto = prompt("ingrese numeros pares");
    if ((texto % 2 ==0) && (texto>=2) && (texto<= 20)) {
        num[contador] = texto;
        contador++;
    } else {
        alert("Debe ingresar numeros pares positivos entre 0 y 20");
        break;
    }
}
var respuesta = prompt("Que tipo de operacion desea realizar con los numeros ingresados?");
if (respuesta == "sumar") {
    for (let i = 0; i < num.length; i++) {
        suma = suma + num[i];
    }
}
if (respuesta == "restar") {
    for (let i = 0; i < num.length; i++) {
        resta = num[i] - resta;
}
if (respuesta == "dividir") {
    for (let i = 0; i < num.length; i++) {
        dividir = num[i] / dividir;
}
if (respuesta == "multiplicar") {
    for (let i = 0; i < num.length; i++) {
        multiplicar = num[i] * multiplicar;
}
alert(num);