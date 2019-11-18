//generar datos de personas
//tener donde guardar personas
//metodo para guardar persona
//metodo para obtener/filtrar persona

var funciones = require('../funciones')
var profesiones = require('./profesiones')
var profesiones = require('./vehiculos')

let listaPersona = [];

const guardarPersona = (body) => {
    let personas={run, fechaNac, tieneProfesion, tieneVehiculo, idProfesion, idVehiculo}=body;
    personas = {
    run:run,
    dv:funciones.validaRun(run),
    fechaNac:fechaNac,
    edad: funciones.obtenerEdad(new Date(fechaNac)),
    tieneProfesion:tieneProfesion,
    tieneVehiculo:tieneVehiculo,
    profesiones:funciones.buscarEnArray(profesiones.listaProfesiones(),"id",idProfesion),
    vehiculo:funciones.buscarEnArray()
    }
    listaPersona.push(personas);
}

const obtenerPersonas = (query) => {
    const {run}=query;
    return funciones.buscarEnArray(listaPersona,"run",run);
}

module.exports={
    guardarPersona, obtenerPersonas
}