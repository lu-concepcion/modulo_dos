


var primero = 0;
var segundo = 1;

do {
    var n = prompt("Indique cuantos numeros desea incluir en su secuencia de Fibonacci");

} while (n < 3 || n > 15);


for (let i = 2; i < n; i++) {

     var sumatoria = parseInt(primero) + parseInt(segundo);
     primero= segundo;
     segundo = sumatoria;
     
    
}
alert(sumatoria);






