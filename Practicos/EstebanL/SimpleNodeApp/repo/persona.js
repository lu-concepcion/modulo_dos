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
        let{rut, fechaNac, tieneProfesion, tieneVehiculo, vehiculo, profesion} = body
        personas.push(body);
        

        personas.rut
        personas.fechaNac
        personas.tieneVehiculo
        personas.tieneProfesion
        personas.vehiculo
        personas.profesion

    }
    const obtenerDatos = (body) =>{
        return personas;
    }


module.exports = {

    guardarDatos,
    obtenerDatos

}