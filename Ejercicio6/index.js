var numero = [];

for(var i=0; i < 5; i++){
    numero[i] = prompt("Ingrese numero: ")
    if(numero % 2 == 0 ){
        alert("Par");
    }
    else{
        alert("Impar")
    }
}