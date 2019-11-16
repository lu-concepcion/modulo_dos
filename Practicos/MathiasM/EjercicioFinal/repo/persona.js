//generar datos de personas
var funciones = require('../funciones.js')
var profesiones= require('./profesiones')
var vehiculos = require('./vehiculos')
let personas= [];

const guardarPersona=(body)=>{
    let persona={run,fechaNac,tieneProfesion,tieneVehiculo,idProfesion,idVehiculo}=body;
    persona={
        run:body.run,
        dv: funciones.inversa(body.run),
        fechaNac : body.fechaNac,
        edad : funciones.calculoEdad2(new Date(body.fechaNac)),
        tieneProfesion : body.tieneProfesion,
        tieneVehiculo : body.tieneVehiculo,
        profesion:funciones.encontrarEnArray(profesiones.listaProfesiones(),"id",body.idProfesion),
        vehiculo:funciones.encontrarEnArray(vehiculos.listaVehiculos(),"idVehiculo",body.idVehiculo)
    };
    personas.push(persona);
}



module.exports={
    guardarPersona
}