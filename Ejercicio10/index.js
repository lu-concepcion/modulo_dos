var numero = new Object();
numero.romano;
numero.valor;

numero.romano = ["I","II","III","IV","V","VI","VII","VIII","IX","X"];
numero.valor = ["Uno","Dos","Tres","Cuatro","Cinco","Seis","Siete","Ocho","Nueve","Diez"];

var numeroIngresado = prompt("Ingrese un numero romano");

for (var i = 0 ;  i < 10; i++) {
    if (numero.romano[i] == numeroIngresado)alert(numero.valor[i])
    
}

