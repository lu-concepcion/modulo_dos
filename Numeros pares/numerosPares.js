var contador = 0;
var texto;
var num = [];

while (contador < 5 ) {
    texto = prompt("ingrese numeros pares");
    if ((texto % 2 ==0) && (texto>=2) && (texto<= 20)) {
        num[contador] = texto;
        contador++;
    } else {
        alert("Debe ingresar numeros pares positivos");
    }
}
alert(num);