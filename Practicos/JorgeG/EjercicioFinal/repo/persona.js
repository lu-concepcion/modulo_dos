//generar datos de personas
var funciones = require('../funciones.js')
var vehiculos = require('./vehiculos')
var profesiones = require('./profesiones.js')
var cursos = require('./cursos')
let personas=[]
const recibePersona = (body) =>{
    let persona={autos,carreras}
    persona.run = body.run
    persona.dv = funciones.moduloOnce(persona.run)
    persona.fechaNac = body.fechaNac
    persona.edad = funciones.calculaEdad(new Date(persona.fechaNac))
    persona.carreras = funciones.filtrarArray(profesiones.devuelveProfesion(),"idProfesion",body.idProfesion)
    persona.autos = funciones.filtrarArray(vehiculos.devuelveAutos(),"idVehiculo",body.idVehiculo)
    return personas
}
personas.push(persona)

const filtrarPersona=(consulta) =>{
    return funciones.filtrarArray(personas,"run",consulta)
}

const matricularPersona = (run, body) =>{
    let objetoPersona = filtrarPersona(run);
    let objetoCurso = cursos.filtrarCursos(body)

    return objetoCurso
}

module.exports={
    recibePersona, filtrarPersona, matricularPersona
}
