//Codigo trabajado y generado por Bryan Montes, se realizo analisis de codigo y aprendizaje.

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

    nombre: "",

    fechaNac: "",

    edad: 0,

    tieneProfesion: false,

    tieneVehiculo: false,

    vehiculo,

    profesion

}



const guardar = (per) => {

    let {rut, nombre, fechaNac, tieneProfesion, tieneVehiculo, idVehiculo, idProfesion} = per;

    if(!funciones.verNum(rut)){

        persona.rut = rut;

        persona.dv = funciones.codigoVerificador(persona.rut);

    }
    persona.nombre = nombre;

    persona.fechaNac = fechaNac;

    persona.edad = funciones.obtenerEdadPersona(fechaNac);

    persona.tieneProfesion = tieneProfesion;

    persona.tieneVehiculo = tieneVehiculo;

    persona.vehiculo = tieneVehiculo ? funciones.buscarEnArray(vehiculos.vehiculos, "id", idVehiculo) : {};

    persona.profesion = tieneProfesion ? funciones.buscarEnArray(profesiones.profesiones, "id", idProfesion) : {};


    personas.push(persona);

}



const buscarPersona = (rut) => {

    let array = [];

    if (funciones.searchInArray(personas,"rut", rut)){

        array = funciones.searchArray(personas, "rut", rut);

        return array;

    }else {

        return "No se a podido encontrar el rut";

    }

}



const eliminar = (rut) => {

    if (funciones.searchInArray(personas,"rut", rut)){

        let array = funciones.deleteElementoArray(personas,"rut",rut);

        return "Se a eliminado correctamente" ;

    }else {

        return "No se ha eliminado correctamente";

    }

}



const verPersonas = (body)=> {

    return personas;

}



module.exports = {

    guardar, buscarPersona, eliminar , verPersonas, persona

}