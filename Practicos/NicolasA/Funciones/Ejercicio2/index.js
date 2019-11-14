import{
    esNumero,
    aMinuscula,
    division,
    multiplicacion,
    restar,
    sumar
} from '../funciones.js';

let numA = 0;
let numB = 0;
let opcion = "";
do{
    numA = parseInt(prompt("Ingrese el primer número"));
    if(!esNumero(numA)){
        alert("No es número!");
    }
}while(!esNumero(numA))

do{
    numB = parseInt(prompt("Ingrese el segundo número"));
    if(!esNumero(numB)){
        alert("No es número!");
    }
}while(!esNumero(numB))

do{         
    opcion = prompt("Qué desea hacer con los números?\n Sumar\n Restar\n Multiplicar\n Dividir");
    opcion = aMinuscula(opcion);
    if(opcion != "sumar" && opcion != "restar" && opcion != "dividir" && opcion != "multiplicar"){
        alert("Opción incorrecta");
    }
    if(opcion == "dividir" && numB == 0){
        alert("El segundo número es 0, ingrese nuevamente el segundo número");
        do{
            numB = prompt("Ingrese el segundo número");
            if(!esNumero(numB)){
                alert("No es número!");
            }
            if(numB == 0){
                alert("No debe ser 0!");
            }
        }while(!esNumero(numB) || numB == 0);
    }
}while(opcion != "sumar" && opcion != "restar" && opcion != "dividir" && opcion != "multiplicar")

if(opcion == "sumar"){
    alert("Su resultado es: " + sumar(numA, numB));
}else{
    if(opcion == "restar"){
        alert("Su resultado es: " + restar(numA, numB));
    }else{
        if(opcion == "multiplicar"){
            alert("Su resultado es: " + multiplicacion(numA, numB));
        }else{
            //Dividir
            alert("Su resultado es: " + division(numA, numB));
        }
    }
}