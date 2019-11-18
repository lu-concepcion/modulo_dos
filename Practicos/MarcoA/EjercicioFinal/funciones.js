var vehiculos = require('./repo/vehiculos')
var profesion = require('./repo/profesiones')

const testing = () => {
    return "test";
}

const digitoVerificador = RUN => {
    largo = RUN.length;
    let multiplicador = 2;
    let numeroVerificador = "";
    let resto = 0;
    let resultado = 0;
    let digitoVerificador = 0;

    for (let i = 0; i < largo; i++) {
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
    largo = RUN.length;
    let invertidoRUN = "";
    for (let i = largo; i >= 0; i--) {
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
    let run = 0;


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

const filtrarArreglo = (arregloQueSeAnalizara) => {
    let ciclo = 0;
    let z = "";
    var notificacion = "";
    let tieneProfesion = "";
    let tieneVehiculo = "";
    let nombre = "";
    let run = 0;
    let fechaNac = 0;
    let añoActual = 2019;

    let arregloAyudanteConProfesionYVehiculo = [{
        rut: 0,
        dv: 0,
        fechaNac: 0,
        edad: 0,
        tieneProfesion: true,
        tieneVehiculo: true,
        vehiculo: {
            marca: "",
            modelo: "",
        },
        profesion: {
            id: "",
            nombre: ""
        },
    }]

    let arregloAyudanteConProfesion = [{
        rut: 0,
        dv: 0,
        fechaNac: 0,
        edad: 0,
        tieneProfesion: true,
        tieneVehiculo: true,
        profesion: {
            id: "",
            nombre: ""
        },
    }]

    let arregloAyudanteConVehiculo = [{
        rut: 0,
        dv: 0,
        fechaNac: 0,
        edad: 0,
        tieneProfesion: true,
        tieneVehiculo: true,
        vehiculo: {
            marca: "",
            modelo: "",
        }
    }]

    arregloQueSeAnalizara.forEach(element => {
        run = element['run'];
    });

    for (let i in arregloQueSeAnalizara) {
        let rut = arregloQueSeAnalizara[i][run];
        console.log(arregloQueSeAnalizara[i][run])
        let dv = digitoVerificador(arregloQueSeAnalizara[i][run]);
        let fechaNaci = arregloQueSeAnalizara[i][fechaNac];
        if (arregloQueSeAnalizara[i][fechaNac].charAt(i) == "/") {
            ciclo++;
        } if (ciclo == 2) {
            if (z == "") {
                z = arregloQueSeAnalizara[i][fechaNac].charAt(i);
            } else {
                z = z + arregloQueSeAnalizara[i][fechaNac].charAt(i);
            }
        }
        let edad = parseInt(añoActual) - parseInt(z);
        if (arregloQueSeAnalizara[i][tieneProfesion] == true) {
            tieneProfesion = true;
            let idProfesion = arregloQueSeAnalizara[i][tieneProfesion][id];
            for (let i in profesion.profesioneslistado) {
                if (profesion.profesioneslistado[i] == idProfesion) {
                    nombre = profesion.profesioneslistado[i][nombre];
                }
            }
        } else {
            tieneProfesion = false;
        }
        if (arregloQueSeAnalizara[i][tieneVehiculo] == true) {
            tieneVehiculo = true;
            let idVehiculo = arregloQueSeAnalizara[i][tieneVehiculo][id];
            for (let i in vehiculos.vehiculosListado) {
                if (vehiculos.vehiculosListado[i] == idVehiculo) {
                    let marca = vehiculos.vehiculosListado[i][marca];
                    let modelo = vehiculos.vehiculosListado[i][modelo]
                }
            }
        } else {
            tieneVehiculo = false;
        }


    }
    if (tieneVehiculo == true && tieneProfesion == true) {
        for (let i in arregloAyudanteConProfesionYVehiculo) {
            arregloAyudanteConProfesionYVehiculo[i][run] = rut;
            arregloAyudanteConProfesionYVehiculo[i][dv] = dv;
            arregloAyudanteConProfesionYVehiculo[i][fechaNac] = fechaNaci;
            arregloAyudanteConProfesionYVehiculo[i][edad] = edad;
            arregloAyudanteConProfesionYVehiculo[i][tieneProfesion] = tieneProfesion;
            arregloAyudanteConProfesionYVehiculo[i][tieneVehiculo] = tieneVehiculo;
            arregloAyudanteConProfesionYVehiculo[i][vehiculo][marca] = marca;
            arregloAyudanteConProfesionYVehiculo[i][vehiculo][modelo] = modelo;
            arregloAyudanteConProfesionYVehiculo[i][profesion][nombre] = nombre;
            opcion = 1;
        }
    } else {
        if (tieneVehiculo == true && tieneProfesion == false) {
            for (let i in arregloAyudanteConVehiculo) {
                arregloAyudanteConProfesionYVehiculo[i][run] = rut;
                arregloAyudanteConProfesionYVehiculo[i][dv] = dv;
                arregloAyudanteConProfesionYVehiculo[i][fechaNac] = fechaNaci;
                arregloAyudanteConProfesionYVehiculo[i][edad] = edad;
                arregloAyudanteConProfesionYVehiculo[i][tieneProfesion] = tieneProfesion;
                arregloAyudanteConProfesionYVehiculo[i][tieneVehiculo] = tieneVehiculo;
                arregloAyudanteConProfesionYVehiculo[i][vehiculo][marca] = marca;
                arregloAyudanteConProfesionYVehiculo[i][vehiculo][modelo] = modelo;
                opcion = 2;
            }
        } else {
            for (let i in arregloAyudanteConProfesion) {
                arregloAyudanteConProfesionYVehiculo[i][run] = rut;
                arregloAyudanteConProfesionYVehiculo[i][dv] = dv;
                arregloAyudanteConProfesionYVehiculo[i][fechaNac] = fechaNaci;
                arregloAyudanteConProfesionYVehiculo[i][edad] = edad;
                arregloAyudanteConProfesionYVehiculo[i][tieneProfesion] = tieneProfesion;
                arregloAyudanteConProfesionYVehiculo[i][tieneVehiculo] = tieneVehiculo;
                opcion = 3;
            }
        }
    }
    if(opcion ==1){
        notificacion = arregloAyudanteConProfesionYVehiculo;
    }else{
        if(opcion ==2){
            notificacion = arregloAyudanteConVehiculo;
        }else{
            notificacion = arregloAyudanteConProfesion;
        }
    }
    return notificacion;
}


module.exports = {
    testing,
    digitoVerificador,
    invertirRUN,
    verificarSeparaciones,
    verficarLimiteEdad,
    filtrarArreglo
}
