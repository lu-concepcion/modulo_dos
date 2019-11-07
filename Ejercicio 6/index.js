var numero;

for(var i=1;i<=5;i++){
numero = parseInt(prompt("Ingrese numero Par: "+(i+1)));
if (numero%2==0){

}
else{
    alert("No Puedes Ingresar numeros Impar")
    i--;
}

if(numero >= 2 && numero <=20){

}else{
    alert("No puede agregar numeros fuera de rango");
    i--;

}

}
