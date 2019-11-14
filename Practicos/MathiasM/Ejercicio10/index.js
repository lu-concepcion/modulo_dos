//Escribir un algoritmo que indique, dado un número romano, este mismo en palabras, solo del 1 al 10, ej;
//input: X
//output: Diez
//Utilizar OBJETOS

//Ejercicio10

var numeroRomano={};

var numero = prompt("Ingrese numero romano");

if(numero.includes("I") || numero.includes("V") || numero.includes("X")){
    numeroRomano.valor = numero;
    if(numeroRomano.valor =="I"){
        alert("Uno")
    }
    if(numeroRomano.valor =="II"){
        alert("Dos")
    }
    if(numeroRomano.valor =="III"){
        alert("Tres")
    }
    if(numeroRomano.valor =="IV"){
        alert("Cuatro")
    }
    if(numeroRomano.valor =="V"){
        alert("Cinco")
    }
    if(numeroRomano.valor =="VI"){
        alert("Seis")
    }
    if(numeroRomano.valor =="VII"){
        alert("Siete")
    }
    if(numeroRomano.valor =="VIII"){
        alert("Ocho")
    }
    if(numeroRomano.valor =="IX"){
        alert("Nueve")
    }
    if(numeroRomano.valor =="X"){
        alert("Diez")
    }
}

