var numeros = [];
var numero = [];

for(var i=0; i < 5; i++){
    numero[i] = prompt("Ingrese numero par: ");
    if(numero[i] % 2 == 0 || numero[i] < 2 || numero[i] > 20){
        alert("Par");
        numeros.push(numero[i]);
    }
    else{
        numero[i] = prompt("Numero incorreto, ingrese nuevamente: ");
        if(numero[i] % 2 == 0 ){

        }
    }
    
}