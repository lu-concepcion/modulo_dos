var primero = 0;
var segundo = 1;
var list = primero + "," + segundo; 
var sum;

var cifra = prompt("Ingrese numero de suceciones(min: 3, max:15): ");
if(cifra >= 3 && cifra <= 15){
   
    for(var i=0; i < cifra; i++){
        sum = parseInt(primero) + parseInt(segundo);
        primero = segundo;
        segundo = sum;
        list = list + "," + sum;
    } 
}

alert(list);