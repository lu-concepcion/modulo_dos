const funciones = require('../funciones')
let personas = [];
let vehiculo = {
    marca: "",
    modelo:""
}
let profesion = {
    id:"",
    nombre:""
}
let persona = {
    rut: "",
    dv: "",
    fechaNac: "",
    edad: "",
    tieneProfesion: false,
    tieneVehiculo: false,
    vehiculo,
    profesion
}


const guardar = (per) => {
    let {rut, fechaNac, tieneProfesion, tieneVehiculo}
    if(parseint(per.rut)){
        persona.rut = rut;
        persona.dv = funciones.codigoVerificador(persona.rut);
    }
    persona.fechaNac = fechaNac;

    personas.push(persona);
} 

module.exports = {
    guardar
}