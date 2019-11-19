//generar datos de personas
var funciones = require('../funciones')
var profesiones= require('./profesiones')
var vehiculos = require('./vehiculos')
var cursos = require('./cursos')
let personas= [];

const guardarPersona=(body)=>{
    let persona={run,fechaNac,tieneProfesion,tieneVehiculo,idProfesion,idVehiculo}=body;
    persona={
        run:run,
        dv: funciones.inversa(run),
        fechaNac : fechaNac,
        edad : funciones.calculoEdad2(new Date(fechaNac)),
        tieneProfesion : tieneProfesion,
        tieneVehiculo : tieneVehiculo,
        profesion:funciones.encontrarEnArray(profesiones.listaProfesiones(),"id",idProfesion),
        vehiculo:funciones.encontrarEnArray(vehiculos.listaVehiculos(),"idVehiculo",idVehiculo)
    };
    personas.push(persona);
}

const filtarPorRun=(query)=>{
    // const {run}=query
     return funciones.encontrarEnArray(personas,"run",query.run)
    
}

const listaPersonas =()=>{
    return personas
}

const matriculaCurso=(run,body)=>{
    let arrayAlumno=[];
    let objetoPersona= funciones.encontrarEnArray(listaPersonas(),"run",run)
    arrayAlumno.push(objetoPersona)
    let objetoCurso = cursos.filtarPorCodigo(body.codigoCurso)
    // alumnos.push(objetoPersona)
    objetoCurso.alumnos=arrayAlumno

    return objetoCurso

}
module.exports={
    guardarPersona, filtarPorRun,listaPersonas,matriculaCurso
}