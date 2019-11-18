const funciones = require('../funciones.js')
const vehiculos = require("./vehiculos.js")
const profesiones = require("./profesiones.js")
//generar datos de ,personas
let personas = [];

let vehiculo = {
    marca: "",
    modelo: ""
}

let profesion = {
    id: "",
    nombre: ""
}

let persona = {
    rut: "",
    dv: "",
    fechaNac: "",
    edad: 0,
    tieneProfesion: false,
    tieneVehiculo: false,
    vehiculo,
    profesion
}

const guardar = (per) => {
    let {rut, fechaNac, tieneProfesion, tieneVehiculo, idVehiculo, idProfesion} = per;
    if(!funciones.verNum(rut)){
        persona.rut = rut;
        persona.dv = funciones.codigoVerificador(persona.rut);
    }
    persona.fechaNac = fechaNac;
    persona.edad = funciones.obtenerEdadPersona(fechaNac);
    persona.tieneProfesion = tieneProfesion;
    persona.tieneVehiculo = tieneVehiculo;
    persona.vehiculo = tieneVehiculo ? funciones.buscarEnArray(vehiculos.vehiculos, "id", idVehiculo) : {};
    persona.profesion = tieneProfesion ? funciones.buscarEnArray(profesiones.profesiones, "id", idProfesion) : {};
    

    personas.push(persona);
}

const verPersona = (rut) => {
    let array = [];
    if (rut){
        array = funciones.searchArray(personas, "rut", rut);
        return array;
    }else {
        return personas;
    }
}

const eliminar = (rut) => {
    if (funciones.buscarEnArray_2(personas, rut)){
        
    }else {
        return "No se ha eliminado correctamente";
    }
}

module.exports = {
    guardar, verPersona, eliminar
}