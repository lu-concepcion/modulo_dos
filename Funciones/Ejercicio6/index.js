import { verificar_numero, numero_aleatorio,} from '../funciones.js';

var contador = 0;
var tus_numeros= "";
var numero = [];
var loto = [];
var los_numeros = "";

for (var i = 0; i < 6; i++) {
    do{
    var pedir_valores = prompt("Ingrese un numero");
    }while(pedir_valores<0||pedir_valores>36)
    if (!verificar_numero(pedir_valores)) {
        if (i == 0) {
            numero[i] = pedir_valores;
        } else {
            for (var j = 0; j < i; j++) {
                if (numero[i] == numero[j]) {
                    alert("No se pueden ingresar numeros repetidos")
                } else {
                    numero[i] = pedir_valores;
                }
            }
        }
    }
}

for(i=0;i<6;i++){
    loto[i]= numero_aleatorio(i);
    if(los_numeros==""){
        los_numeros=loto[i];
    }else{
        los_numeros = los_numeros +", "+loto[i];
    }
}

for(i=0;i<6;i++){
    if(numero[i]==loto[i]){
        contador++;
    }
}

alert("Numero de aciertos: "+contador)

for(i=0;i<6;i++){
    if(tus_numeros==""){
        tus_numeros = numero[i];
    }else{
        tus_numeros = tus_numeros+", "+numero[i];
    }
}


alert("Tus numeros fueron "+tus_numeros+" y los de la loteria fueron: "+los_numeros)