var funciones = require('../funciones')
var vehiculos = require('./vehiculos')
var profesiones = require('./profesiones')
var index = require('../index')
let personasLista = [];

//generar datos de personas
const reciboPersona = (body) => {
    let datosGuardar = new Object();
    datosGuardar.id = personasLista.length +1;
    const {run, fechaNac, tieneProfesion, tieneVehiculo, vehiculoId, profesionId } = body;
    if (run && funciones.digitoVerificador(run)) {
        datosGuardar.run = run;
        datosGuardar.dv = funciones.digitoVerificador(run);
    }
    else {
        datosGuardar.run = run;
        datosGuardar.dv = "";
    }
    if(fechaNac) {
        let fechaCumple = fechaNac.split("/");
        const fecha = new Date(fechaCumple[2], fechaCumple[1], fechaCumple[0]);
        datosGuardar.fechaNac = fechaNac;
        datosGuardar.edad = funciones.tienesEdad(fecha);
    }
    else {
        datosGuardar.fechaNac = "Error";
        datosGuardar.edad = 0;
    }
    if (tieneVehiculo == true)
            datosGuardar.vehiculo = {"marca":vehiculos.carrosLista[vehiculoId]['marca'], "modelo":vehiculos.carrosLista[vehiculoId]['modelo']};
    else
        datosGuardar.vehiculo = {};
    if (tieneProfesion == true )
        datosGuardar.profesion = {"id" : profesionId, "nombre" : profesiones.profesionesLista[profesionId]['nombre']};
    else
        datosGuardar.profesion = {};
    personasLista.push(datosGuardar);
}

const listarPersonas = () => {
    return personasLista;
}

const buscarPersona = run => {
    let persona = [];
    if (run) {
        for (let item in personasLista) {
            if (personasLista[item]['run'] == run) {
                persona = personasLista[item];
            }
        }
    }
    return persona;
}
module.exports = {
    reciboPersona,
    listarPersonas,
    buscarPersona
}