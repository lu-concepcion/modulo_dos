var contador = 0;
var texto;
var num = [];
var suma = 0;
var resta = 0;
var dividir = 0;
var multiplicar = 0;

while (contador < 5 ) {
    texto = prompt("ingrese numeros pares");
    parseInt(texto);
    if ((texto % 2 ==0) && (texto>=2) && (texto<= 20)) {
        num[contador] = parseInt(texto);
        contador++;
    } else {
        alert("Debe ingresar numeros pares positivos entre 0 y 20");
        break;
    }
}
var respuesta = prompt("¿Que tipo de operacion desea realizar con los numeros ingresados?");
if (respuesta == "suma") {
    for (let i = 0; i < num.length; i++) {
        suma = suma + num[i];
    }
    alert(suma);
}
if (respuesta == "resta") {
    for (let i = 0; i < num.length; i++) {
        resta = num[i] - resta;
    }
    alert(resta);
}
if (respuesta == "división") {
    for (let i = 0; i < num.length; i++) {
        dividir = num[i] / dividir;
    }
    alert(dividir);
}
if (respuesta == "multiplicar") {
    for (let i = 0; i < num.length; i++) {
        multiplicar = num[i] * multiplicar;
    }
    alert(multiplicar);
}