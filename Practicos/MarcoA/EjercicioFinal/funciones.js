const testing = () => {
    return "test";
}

const digitoVerificador = RUN => {
    let multiplicador = 2;
    let numeroVerificador = "";
    let resto = 0;
    let resultado = 0;
    let digitoVerificador = 0;

    for (let i = 0; i < RUN.length; i++) {
        if (multiplicador > 7) {
            multiplicador = 2;
        }
        console.log(invertirRUN(RUN).charAt(i), multiplicador, numeroVerificador)
        if (numeroVerificador == "") {
            numeroVerificador = parseInt(invertirRUN(RUN).charAt(i) * multiplicador);
        } else {
            numeroVerificador = parseInt(numeroVerificador) + parseInt(invertirRUN(RUN).charAt(i) * multiplicador);
        }
        multiplicador++

    }
    resto = numeroVerificador % 11;
    resultado = 11 - resto;
    console.log(resto, resultado)
    if (resultado == 11) {
        digitoVerificador = 0;
    } else {
        if (resultado == 10) {
            digitoVerificador = "K";
        } else {
            digitoVerificador = resultado;
        }
    }
    return digitoVerificador;
}

const invertirRUN = RUN => {
    let invertidoRUN = "";
    for (let i = RUN.length; i >= 0; i--) {
        if (invertidoRUN == "") {
            invertidoRUN = RUN.charAt(i);
        } else {
            invertidoRUN = invertidoRUN + RUN.charAt(i);
        }
    }
    return invertidoRUN
}

const verificarSeparaciones = RUN => {
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

const verficarLimiteEdad = (edadLimite, arreglo) => {
    let personas = [];
    let fecha = '';
    let edad = 0;
    const hoy = new Date();

    arreglo.forEach(element => {
        fecha = element['fechaNacimiento'];
        console.log(fecha)
        if ((hoy.getMonth() + 1) >= fecha.getMonth() && hoy.getDate() >= fecha.getDate()) {
            edad = hoy.getFullYear() - fecha.getFullYear();
        } else {
            edad = (hoy.getFullYear() - 1) - fecha.getFullYear();
        }
        if (edad > edadLimite) {
            personas.push(element);
        }
    });
    return personas;
}

module.exports = {
    testing,
    digitoVerificador,
    invertirRUN,
    verificarSeparaciones,
    verficarLimiteEdad
}
