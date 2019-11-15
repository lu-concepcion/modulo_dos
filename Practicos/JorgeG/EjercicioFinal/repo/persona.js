//generar datos de personas
var funciones = require('../funciones')
//var vehiculos = require('./vehiculos')
var profesiones = require('./profesiones')
let personas=[]
let recibe = (body) =>{
    let autos={}
    let persona={autos}
    persona.run = body.run
    persona.dv = funciones.moduloOnce(persona.run)
    persona.fechaNac = body.fechaNac
    persona.edad = funciones.calculaEdad(new Date(persona.fechaNac))
    let i=0
    if(body.tieneProfesion){
        do{
            i++
        }while(body.idProfesion!=profesiones.devuelveProfesion()[i].nombre)
    }
    persona.profesion = profesiones.devuelveProfesion()[i]
    personas.push(persona);
    return personas
}


module.exports={
    recibe
}
