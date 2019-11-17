//generar datos de personas
var funciones = require('../funciones.js')
//var vehiculos = require('./vehiculos')
//var profesiones = require('./profesiones.js')
let personas=[]
let recibe = (body) =>{
    let autos={}
    let persona={autos}
    persona.run = body.run
    persona.dv = funciones.moduloOnce(persona.run)
    persona.fechaNac = body.fechaNac
    persona.edad = funciones.calculaEdad(new Date(persona.fechaNac))
    let i=0 ,res=''
    // res  =profesiones.devuelveProfesion()[1].nombre
    // if(body.tieneProfesion){
    //     do{
    //         i++
    //     }while(body.idProfesion!=profesiones.devuelveProfesion()[1].nombre)
    // }
    // persona.profesion = profesiones.devuelveProfesion()[i]
    personas.push(persona);
    return personas
}


module.exports={
    recibe
}
