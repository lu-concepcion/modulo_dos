//generar datos de personas
var funciones = require('../funciones.js')
var profesiones= require('./profesiones')
let personas= [];

const guardarPersona=(body)=>{
    let fechaNac={};
    let persona={fechaNac};
    persona.run= body.run;
    persona.dv= funciones.inversa(body.run)
    persona.fechaNac.dia = body.fechaNac.dia;
    persona.fechaNac.mes = body.fechaNac.mes;
    persona.fechaNac.agnio = body.fechaNac.agnio;
    persona.edad = funciones.calculoEdad2(new Date(body.fechaNac.agnio,body.fechaNac.mes,body.fechaNac.dia));
    persona.tieneProfesion = body.tieneProfesion;
    persona.idProfesion = body.idProfesion;
    persona.tieneVehiculo = body.tieneVehiculo;
    persona.idVehiculo = body.idVehiculo;
    personas.push(persona);

    if(body.tieneProfesion==true){
        do{
            i++
        }while(body.idProfesion!=profesiones.listaProfesiones()[i].idProfesion)
    }
}

module.exports={
    guardarPersona
}