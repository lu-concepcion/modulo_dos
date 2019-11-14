var contador = 0;
var salir = false;
var numeros=[2, 4, 6, 8, 10];
for(var i=0; i<5; i++){
    var numero = prompt("Ingrese número (par)");
    if(numero%2 == 0 && numero > 1 && numero < 21){ // par y mayor a 1
        numeros[i] = parseInt(numero);
    }else{
        i--;
    }
}

do{
    var operacion = prompt("Desea multiplicacion o sumar?");
}while(operacion != "Multiplicacion" && operacion != "Sumar")

if(operacion == "Multiplicacion"){
    var total = numeros[0]*numeros[1]*numeros[2]*numeros[3]*numeros[4];
}else{
    var total = numeros[0]+numeros[1]+numeros[2]+numeros[3]+numeros[4];
}
document.write("Resultado total " + total);