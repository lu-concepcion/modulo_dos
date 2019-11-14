// Escribir un algoritmo que indique, dado un número romano, este mismo en palabras, solo del 1 al 10, ej;

// input: X
// output: Diez

// Utilizar OBJETOS

var numeros ={
    I:"uno",
    II: "dos",
    III: "tres",
    IV: "cuatro",
    V: "cinco",
    VI: "seis",
    VII: "siete",
    VIII:"ocho",
    IX: "nueve", 
    X: "diez"
};


var funciona=0;


do{
    var numeroRomano=prompt("Ingrese un número romano");
    for (const prop in numeros) {
        comparacion= prop
        if (numeroRomano==comparacion){
            alert(numeros[prop]);
            funciona=1;
            
        }
        
    }
} while(funciona==0)