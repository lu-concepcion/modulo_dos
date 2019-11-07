var contador = 0;
const numeros = [];
var sumar = 0;
var multiplicar = 0;
var good=false;

do {
    var numero = prompt("Ingresa un número par:");
    if (!isNaN(numero) && numero >= 2 && numero <=20 && numero % 2 == 0) {
            numeros.push(numero);
            contador++;
    }
    else {
        alert ("Verifica los datos que ingresastes, puede ser que no ingresastes un número par :(");
    }
}
while(contador < 5);

do {
    var accion = prompt("Que tipo de operacion, deseas realizar: Sumar o Multiplicar?");
if (accion.toLowerCase() == "sumar") {
    var good=true;
    for (const item in numeros) {
        sumar = parseInt(sumar) + parseInt(numeros[item]);
    }
    alert("Tu resultado es: "+sumar);
}
else if (accion.toLowerCase() == "multiplicar") {
    var good=true;
    for (const item in multiplicar) {
        multiplicar = parseInt(multiplicar) * parseInt(numeros[item]);
    }
    alert("Tu resultado es: "+multiplicar);
}
else {
    alert("Ingresa una opción");
    var good=false;
}
}while(good == true);

