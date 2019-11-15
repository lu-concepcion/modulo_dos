const funciones = require('../funciones.js')
const vehiculos = require("./vehiculos.js")
//generar datos de personas
let personas = [];

let vehiculo = {
    marca: "",
    modelo: ""
}

let persona = {
    rut: "",
    dv: "",
    fechaNac: "",
    edad: 0,
    tieneProfesion: false,
    tieneVehiculo: false,
    vehiculo
}

const guardar = (per) => {
    let {rut, fechaNac, edad, tieneProfesion, tieneVehiculo, idVehiculo} = per;
    if(!isNaN(rut)){
        persona.rut = rut;
        persona.dv = funciones.codigoVerificador(persona.rut);
    }
    persona.fechaNac = fechaNac;
    persona.edad = edad;
    persona.tieneProfesion = tieneProfesion;
    persona.tieneVehiculo = tieneVehiculo;
    persona.vehiculo = funciones.buscarEnArray(vehiculos.vehiculos, "id", idVehiculo)
    

    personas.push(persona);
}

module.exports = {
    guardar
}