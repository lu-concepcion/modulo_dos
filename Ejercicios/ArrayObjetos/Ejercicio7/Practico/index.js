
prom = 0;
var fibonacci = [0, 1]

do{

    var tam = prompt ("Ingrese el tamaño de muestra");   
    
    if (tam<3 || tam>15){

        alert ("El tamaño de la muestra debe de estar entre 3 a 15");
        
    }else{

        prom++
        
    }
}while(prom == 0)

for(var i=2; i<tam; i++){

fibonacci [i] = fibonacci [i-1] + fibonacci [i-2]
}

document.write(fibonacci)
