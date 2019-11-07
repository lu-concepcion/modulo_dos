do{
    var size = prompt("Cantidad de la sucesión");
}while(size < 2 || size > 16);

var nPrimero = 0;
var nSegundo = 1;
var nTotal = nPrimero+nSegundo;
var secuencia = "0 " + "1 ";

for(var i=0; i<=size; i++){
    nSegundo = nPrimero;
    nPrimero = nTotal;
    nTotal = nPrimero+nSegundo;
    secuencia = secuencia + nTotal + " ";
}

document.write(secuencia);