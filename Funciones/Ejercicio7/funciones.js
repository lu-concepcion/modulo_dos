export const verificarNumero = RUN => (!isNaN(RUN))

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
                } else {
                    nuevoCambioDeRut = nuevoCambioDeRut + nuevoRUN.charAt(i);
                }
            }
        }
    return nuevoCambioDeRut
}

