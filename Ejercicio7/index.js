// Escribir un algoritmo que genere la secuencia Fibonacci de las primeras N sucesiones, considerando el 0 y 1
// que dan inicio a esta sucesión. Para N se debe considerar un mínimo de 3 y un máximo de 15 y se debe 
//solicitar por pantalla vía prompt hasta que se ingrese un valor válido.
// Se debe utilizar un ciclo for para recorrer las N sucesiones.
// El resultado debe ir en el siguiente formato: 0, 1, 1, 2, 3, 5 … y debe ser mostrado en el navegador, 
//para ello usar: document.write()
// Fibonacci es una sucesión de números naturales, comenzando del 0 y 1, luego de estos cada número que 
//continúa es la suma de los dos anteriores, 
// Ej: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34….
var i=0,f0=0,f1=1,generado=0,resultado='0-1';
do{
    var n = prompt("Ingrese un numero entre 3 y 15");
}while(n<=3 && n>=15);

for(i=0;i<n;i++){
    generado=f0+f1;
    f0=f1;
    f1=generado;
    resultado+='-',generado;
}
document.write(resultado)