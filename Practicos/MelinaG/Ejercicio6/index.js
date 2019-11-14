var numerosPares = [];
var resultado ="";

do {
    var p = prompt("ingrese un numero par");
    
    if ( p %2 == 0 && p>=2 && p<=20){
       numerosPares.push(p)
    }
    }while(numerosPares.length < 5);

do { var operacion = prompt("desea realizar multiplicación o adición de los valores?" )
        if (operacion == "multiplicación" || operacion == "multiplicacion" ){
             resultado = parseInt(numerosPares[0])* parseInt(numerosPares[1])* parseInt(numerosPares[2]) * parseInt(numerosPares[3]) * parseInt(numerosPares[4]);
             document.write(resultado);
         }
        if (operacion =="adición" || operacion == "adicion"){
            resultado = parseInt(numerosPares[0])+ parseInt(numerosPares[1])+ parseInt(numerosPares[2])+ parseInt(numerosPares[3]) + parseInt(numerosPares[4]);
            document.write(resultado);
         }       
}while(resultado == "" );
