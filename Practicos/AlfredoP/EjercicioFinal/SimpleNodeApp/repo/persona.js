var funciones = require('../funciones')
var index = require('../index')
let personasLista = [];
const carrosLista = [
    {},
    {
        "marca" : "Ford",
        "modelo" : "Mustang"
    },
    {
        "marca" : "Ranger",
        "modelo" : "4X4"
    },
];

const profesionesLista = [
    {},
    {
        "nombre" : "Ingeniero"
    },
    {
        "nombre" : "Developer"
    },
    {
        "nombre" : "Tecnico en Informaticá"
    }
];

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
    if (tieneVehiculo == true) { 
            datosGuardar.vehiculo = {"marca":carrosLista[vehiculoId]['marca'], "modelo":carrosLista[vehiculoId]['modelo']};
    }
    else {
        datosGuardar.vehiculo = {};
    }
    if (tieneProfesion == true ) {
        datosGuardar.profesion = {"id" : profesionId, "nombre" : profesionesLista[profesionId]['nombre']};
    }
    else {
        datosGuardar.profesion = {};
    }
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