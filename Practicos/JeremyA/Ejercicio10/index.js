//Escribir un algoritmo que indique, dado un número romano, este mismo en palabras, solo del 1 al 10, ej;
//input: X
//output: Diez
//Utilizar OBJETOS

//var palito = prompt("Ingrese un número romando del I al X");

//switch(palito){
  //  case"I":alert("Uno");
    //break;
//
  //  case"II":alert("Dos");
//}


var palito = [
    {
        numeroPalito: "I",
        valorPalito: "Uno"
    },
    {
        numeroPalito: "II",
        valorPalito: "Dos"
    },
    {
        numeroPalito: "III",
        valorPalito: "Tres"
    },
    {
        numeroPalito: "IV",
        valorPalito: "Cuatro"
    },
    {
        numeroPalito: "V",
        valorPalito: "Cinco"
    },
    {
        numeroPalito: "VI",
        valorPalito: "Seis"
    },
    {
        numeroPalito: "VII",
        valorPalito: "Siete"
    },
    {
        numeroPalito: "VIII",
        valorPalito: "Ocho"
    },
    {
        numeroPalito: "IX",
        valorPalito: "Nueve"
    },
    {
        numeroPalito: "X",
        valorPalito: "Diez"
    }
];

do{
var palitoIngresado = prompt("Ingrese un número romando del I al X")
}while(palitoIngresado.length <= 0 || palitoIngresado.length >=5)

for(i=0; i<10; i++){
    if(palito[i].numeroPalito == palitoIngresado.toUpperCase()){
        alert(palito[i].valorPalito);
        break;
    }
    if(i == 9){
        alert("El número no está dentro del rango");
    }
}

