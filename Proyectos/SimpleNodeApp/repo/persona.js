var funciones = require('../funciones.js')
var vehiculos = require('./vehiculos.js')
var profesiones = require('./profesiones.js')
let personas = []

const obtenerPersonas = (run) => {
    return personas;
}

const guardarPersona = (body) =>{
    let personaNueva = new Object();
    personaNueva = body;
    personaNueva.dv = funciones.calcularDigitoVerificador(Object.values(personaNueva)[0]);
    let objetoProfesion = {};
    let objetoVehiculo = {};

    if (Object.values(personaNueva)[2]) {
        objetoProfesion = funciones.objetoEnArray(profesiones.profesiones, "id", Object.values(personaNueva)[5])    
    }    
    if ( Object.values(personaNueva)[3]) {
        objetoVehiculo = funciones.objetoEnArray(vehiculos.vehiculos, "id", Object.values(personaNueva)[4])    
    }
      
    personaNueva.profesion = objetoProfesion;
    personaNueva.vehiculo = objetoVehiculo;


    personas.push(personaNueva);

    return "wena"
}

module.exports = {
    guardarPersona,
    obtenerPersonas
}