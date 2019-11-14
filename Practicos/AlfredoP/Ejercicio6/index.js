var contador = 0;
const numeros = [];
var resultado = 0;
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
    for (const item in numeros) {
        resultado = parseInt(resultado) + parseInt(numeros[item]);
    }
    alert("Tu resultado es: "+resultado);
    var good=true;
}
else if (accion.toLowerCase() == "multiplicar") {
    var resultado =1;
    for (const item in numeros) {
        resultado = parseInt(resultado) * parseInt(numeros[item]);
    }
    alert("Tu resultado es: "+ resultado);
    var good=true;
}
else {
    alert("Ingresa una Opción");
    var good=false;
}
}while(!good);

