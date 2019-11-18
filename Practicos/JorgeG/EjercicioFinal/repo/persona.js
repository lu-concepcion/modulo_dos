//generar datos de personas
var funciones = require('../funciones.js')
var vehiculos = require('./vehiculos')
var profesiones = require('./profesiones.js')
let personas=[]
const recibe = (body) =>{
    // let autos={}
    let persona={}
    persona.run = body.run
    persona.dv = funciones.moduloOnce(persona.run)
    persona.fechaNac = body.fechaNac
    persona.edad = funciones.calculaEdad(new Date(persona.fechaNac))

    // persona.profesion.nombre = profesiones.devuelveProfesion()[]
    // let i=0 ,res=''
    // res  =profesiones.devuelveProfesion()[i].nombre
    // if(body.tieneProfesion){
    //     do{
    //         i++
    //     }while(body.idProfesion!=profesiones.devuelveProfesion()[i].nombre)
    // }
    persona.profesion = profesiones.devuelveProfesion()[i]
    personas.push(persona);
    return personas
}


module.exports={
    recibe
}
