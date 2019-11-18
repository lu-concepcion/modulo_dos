//generar datos de personas
var funciones = require('../funciones.js')
var vehiculos = require('./vehiculos')
var profesiones = require('./profesiones.js')
let personas=[]
const recibe = (body) =>{
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



module.exports={
    recibe, filtrarPersona
}
