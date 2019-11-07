var numerosPares = [];
var numerosIngresados = [];
var suma, multiplic = 0;
for(var i=0; i<5; i++){
    numerosIngresados[i] = prompt("Ingrese un número par");
    if(numerosIngresados[i] % 2! = 0 || numerosIngresados [i]<0 || numerosIngresados[i]>20){
        numerosIngresados [i] = prompt("Número inválido, ingrese nuevamente");
      if (numerosIngresados [i] % 2== 0 && numerosIngresados [i] >0 && numerosIngresados [i]<21)
      {
         numerosPares[i] = numerosIngresados[i];
      }
    }
}
alert("")