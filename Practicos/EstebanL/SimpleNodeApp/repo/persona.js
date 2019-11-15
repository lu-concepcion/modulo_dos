//generar datos de personas
    var funciones = require('./funciones');
    var vehiculos = require('vehiculos');
    var profesiones = require('profesiones');
    
    
    let personas = [];

    let personas = {

        rut: "",
        dv: "",
        fechaNac: "",
        edad: 0,
        tieneProfesion: false,
        tieneVehiculo: false,
        vehiculo,
        profesion

    }
    let vehiculos = {

        id: "",
        marca:"",
        modelo:""

    }
    let profesiones = {

        id:"",
        nombre:""

    }
    




    const guardarDatos = (body) =>{

        personas.push(body);
        return "ingresado";

    }
    const obtenerDatos = (body) =>{
        return personas;
    }


module.exports = {

    guardarDatos,
    obtenerDatos

}