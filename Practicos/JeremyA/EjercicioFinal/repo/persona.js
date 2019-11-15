//generar datos de personas
//tener donde guardar personas
//metodo para guardar persona
//metodo para obtener/filtrar persona

var funciones = require('../funciones')
var profesiones = require('./profesiones')
var profesiones = require('./vehiculos')

let listaPersona = [];

const guardarPersona = (body) => {
    let personas={
        run:"",
        dv:"",
        fechaNac:"",
        edad:"",
        tieneProfesion:"",
        tieneVehiculo:"",
        vehiculo:"",
        profesion:""};
    personas.run=body.run;
    personas.dv=body.dv;
    personas.fechaNac=body.fechaNac;
    personas.edad=body.edad;
    personas.tieneProfesion=body.tieneProfesion;
    personas.tieneVehiculo=body.tieneVehiculo;
    personas.vehiculo=body.vehiculo;
    profesiones.profesiones=body.profesion;
}

const obtenerPersonas = (run) => {
    return listaPersona;
}

module.exports={
    guardarPersona, obtenerPersonas
}