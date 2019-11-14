var suma = 0;
var multiplicacion = 1;
var contador = 0;
corriendo = 1;
var ingresoNumero;
do {
    ingresoNumero = prompt("Ingresa un numero");
    if((parseInt(ingresoNumero) >= 2)&&(parseInt(ingresoNumero) <= 20)&&(parseInt(ingresoNumero) % 2 == 0)){
        suma = parseInt(suma) + parseInt(ingresoNumero);
        multiplicacion = parseInt(multiplicacion) * parseInt(ingresoNumero);
        contador = contador + 1;
    }
    if(contador == 5)break;   
} while (corriendo);
var operacion = prompt("Ingrese operacion a realizar");
if (operacion == "Sumar")alert("La suma es: "+ suma)
if (operacion == "Multiplicar")alert("La multiplicacion es: "+ multiplicacion)