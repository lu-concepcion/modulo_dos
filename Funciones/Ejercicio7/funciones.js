export const verificarNumero = RUN => (!isNaN(RUN))

export const digitoVerificador = RUN =>{
    let multiplicador = 2;
    let numeroVerificador = "";
    let resto = 0;
    let resultado = 0;
    let digitoVerificador = 0;

    for(let i=0;i<8;i++){
        if(numeroVerificador==""){
        numeroVerificador = parseInt(RUN.charAt(i)*multiplicador);
        }else{
            numeroVerificador = parseInt(numeroVerificador) + parseInt(RUN.charAt(i)*multiplicador);
        }
        multiplicador++
        if(multiplicador>7){
            multiplicador=2;
        }
    }
    resto = numeroVerificador%11;
    resultado = 11 - resto;
    if(resultado==11){
        digitoVerificador = 0;
    }else{
        if(resultado==10){
            digitoVerificador = K;
        }else{
            digitoVerificador = resultado;
        }
    }
    return digitoVerificador;
}

export const invertirRUN = RUN => {
    let invertidoRUN = "";
    for (let i = RUN.length; i >= 0; i--) {
        if(invertidoRUN==""){
        invertidoRUN = RUN.charAt(i);
        }else{
            invertidoRUN = invertidoRUN+RUN.charAt(i);
        }
    }
    return invertidoRUN
}


export const verificarSeparaciones = RUN => {
    let nuevoRUN = "";
    let nuevoCambioDeRut = "";
    let cambiarRUT = 0;
    let arregloRUN = [];

    for (let i = 0; i < RUN.length; i++) {
        if (RUN.charAt(i) == ".") {
            arregloRUN = RUN.split(".");
            cambiarRUT = 1;
        }
    }
    if (cambiarRUT == 1) {
        for (let i = 0; i < 3; i++) {
            if (nuevoRUN == "") {
                nuevoRUN = arregloRUN[i];
            } else {
                nuevoRUN = nuevoRUN + arregloRUN[i];
            }
        }
        for (let i = 0; i < 8; i++) {
            if (nuevoCambioDeRut == "") {
                nuevoCambioDeRut = nuevoRUN.charAt(i);
                invertirRUN(nuevoCambioDeRut);
            } else {
                nuevoCambioDeRut = nuevoCambioDeRut + nuevoRUN.charAt(i);
                invertirRUN(nuevoCambioDeRut);
            }
        }
    }

    if (cambiarRUT == 0) {
        if (RUN.length <= 8 && RUN.length > 6) {
            nuevoCambioDeRut = RUN;
            invertirRUN(nuevoCambioDeRut);
        } else {
            nuevoCambioDeRut = "RUT INCORRECTO O INTRODUCIDO CON NUMERO DESPUES DEL GUION";
        }
    }

    return nuevoCambioDeRut
}
