var funciones = require('../funciones.js')
//generar datos de personas
let personas = [];



let persona = {
    rut: "",
    dv: "",
    fechaNac: "",
    edad: 0,
    tieneProfesion: false,
    tieneVehiculo: false,
    // vehiculo = {
    //     marca: "",
    //     modelo: ""
    // },
    // profesion = {
    //     id: "",
    //     nombre: ""
    // }
}

const guardar = (per) => {
    let {rut, fechaNac, edad, tieneProfesion, tieneVehiculo} = per;
    if(!isNaN(rut)){
        persona.rut = rut;
        persona.dv = funciones.codigoVerificador(persona.rut);
    }
    persona.fechaNac = fechaNac;
    persona.edad = edad;
    persona.tieneProfesion = tieneProfesion;
    persona.tieneVehiculo = tieneVehiculo;
    

    personas.push(persona);
}

module.exports = {
    guardar
}