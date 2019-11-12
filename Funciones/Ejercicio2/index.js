import { operacionesAritmeticas, verificarNumeros } from '../funciones';


var pedir_numero1 = prompt("Ingrese el primer numero");
if (!verificarNumeros(pedir_numero1)) {
    var pedir_numero2 = prompt("Ingrese el segundo numero")
    if(!verificarNumeros(pedir_numero2)){
        do{
        var pedir_operacion = prompt ("¿Que operacion desea realizar?\n1.- Suma\n2.- Resta\n3.- Multiplicacion \n4.- Division")
        }while(verificarNumeros(pedir_operacion)||pedir_operacion<1&&pedir_operacion>4)
        alert(operacionesAritmeticas(pedir_operacion, pedir_numero1, pedir_numero2))
    }else{
        alert("Solo se permite el ingreso de numeros")
    }
}else{
    alert("Solo se permite el ingreso de numeros")
}


