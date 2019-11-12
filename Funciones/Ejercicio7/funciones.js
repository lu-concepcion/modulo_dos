export const verificarNumero = RUN => (!isNaN(RUN))

export const invertirRUN = RUN => {
    let invertidoRUN = "";
    for (let i = RUN.length; i <= 0; i--) {
        if(invertidoRUN==""){
        invertidoRUN = RUN.charAt(i);
        }else{
            invertidoRUN = invertidoRUN+RUN.charAt(i);
        }
    }
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
